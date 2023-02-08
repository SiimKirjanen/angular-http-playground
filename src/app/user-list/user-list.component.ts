import { Component, OnInit } from '@angular/core';
import { IUser } from '../IUser';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let user of users">{{user.name}}</li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUsers().subscribe({
        next: (data) => {
          this.users = data;
          console.table(data);
        },
        error: (error) => console.log(error),
        complete: () => console.log('Done')
    });
    this.onCreateUser();
  }

  onCreateUser() {
      this._userService.createUser({
        'name': 'siim',
        'email': 'test@test.ee'
      }).subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Done')
    });
  }

}
