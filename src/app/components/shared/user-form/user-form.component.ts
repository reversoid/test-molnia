import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender, IUser } from 'src/app/Types/types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}

  public userForm!: FormGroup;

  @Input() user?: IUser;

  public submitForm() {
    if (this.userForm.valid) {
      console.log('everything is ok!');
    } else {
      Object.values(this.userForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
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

      legalAddressCountry: [
        this.user?.legalAddress.country ?? '',
        [Validators.required],
      ],
      legalAddressCity: [
        this.user?.legalAddress.city ?? '',
        [Validators.required],
      ],
      legalAddressAddress: [
        this.user?.legalAddress.address ?? '',
        [Validators.required],
      ],

      photo: [this.user?.photo ?? '', []],
    });
  }
}
