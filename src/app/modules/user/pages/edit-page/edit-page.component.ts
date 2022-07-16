import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, mergeMap, Subscription } from 'rxjs';
import { UserService } from 'src/app/modules/user/services/user.service';
import { IUser } from 'src/app/modules/user/Types/types';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  private _routeSubscription!: Subscription;
  public user?: IUser;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this._routeSubscription = this._route.params
      .pipe(map((params: Params) => Number(params['id'])))
      .pipe(mergeMap((id) => this._userService.getUserById(id)))
      .subscribe({
        complete: () => {},
        error: () => {
          this._router.navigate(['users']);          
        },
        next: (user) => {
          this.user = user;
        }
      });
  }

  ngOnDestroy(): void {
    this._routeSubscription.unsubscribe();
  }
}
