import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Subject, takeUntil } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';
import { Gender, IUser, IUserPayload } from 'src/app/Types/types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  constructor(
    private _fb: FormBuilder,
    public photoService: PhotoService,
    private _userService: UserService,
    private message: NzMessageService,
    private _router: Router
  ) {}

  public userForm!: FormGroup;

  @Input() user?: IUser;

  private _ngDestroySubscription$: Subject<any | undefined> = new Subject();

  public photoHandleChange(info: { file: NzUploadFile }): void {
    if (info.file.status !== 'uploading' || !this._photoIsFirstLoad()) return;
    
    this.photoService.getBase64(info.file!.originFileObj!, (img: string) => {
      this.userForm.get('photo.url')?.patchValue(img);
    });
    this._markPhotoAsAttemptedToLoad();
  }

  public photoUrl() {
    return this.userForm.controls['photo'].value['url'];
  }

  public deletePhoto(event: any) {
    event.preventDefault();
    this.userForm.get('photo')?.get('url')?.setValue('');
  }

  public _markAllInvalidity = (controls: {[key: string]: AbstractControl | FormGroup}) => {
    Object.values(controls).forEach((control) => {
      if ('controls' in control) {
        this._markAllInvalidity(control.controls);
      }
      
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  } 

  public submitForm() {
    if (!this.userForm.valid) {
      this._markAllInvalidity(this.userForm.controls);
      return;
    }

    // process img, because in IUser it is a string, but in this form it is an object
    const imgUrl = this.userForm.controls['photo'].value['url'];
    const userForm = { ...this.userForm.value, photo: imgUrl } as IUserPayload;

    if (this._isForEditing())
      this._userService.updateUser(this.user!.id, userForm);
    else this._userService.addUser(userForm);

    this.message
      .success('Success!', { nzDuration: 800 })
      .onClose.pipe(takeUntil(this._ngDestroySubscription$))
      .subscribe(() => this._router.navigate(['users']));
  }

  ngOnInit(): void {
    this.userForm = this._fb.group({
      name: [
        this.user?.name ?? '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]*$/),
        ],
      ],

      surname: [
        this.user?.surname ?? '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z]*$/),
        ],
      ],

      gender: [
        this.user ? Gender[this.user.gender] : '',
        [Validators.required],
      ],

      personalPhone: [
        this.user?.personalPhone ?? '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],

      mobilePhone: [
        this.user?.mobilePhone ?? '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(9),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],

      legalAddress: this._fb.group({
        country: [this.user?.legalAddress.country ?? '', [Validators.required]],
        city: [this.user?.legalAddress.city ?? '', [Validators.required]],
        address: [this.user?.legalAddress.address ?? '', [Validators.required]],
      }),

      photo: this._fb.group({
        url: this.user?.photo ?? '',
        _isFirstTry: true,
      }),
    });
  }

  private _photoIsFirstLoad() {
    return Boolean(this.userForm.controls['photo'].value['_isFirstTry']);
  }

  private _markPhotoAsAttemptedToLoad() {
    this.userForm.controls['photo'].value['_isFirstTry'] = false;
  }

  private _isForEditing() {
    return Boolean(this.user);
  }

  ngOnDestroy(): void {
    this._ngDestroySubscription$.next(0);
    this._ngDestroySubscription$.complete();
  }
}
