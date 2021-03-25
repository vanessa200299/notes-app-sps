//Component for list all users
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css'],
  providers: [UserService]
})
export class AppUserListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) { }

  users: User[] = [];
  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  ngOnInit(): void {
    //Get new user event and update list
    this.eventsSubscription = this.events.subscribe(() => this.getUsers());
    this.getUsers();
  }

  getUsers(): void {
    //Mdthod for find all users
    this.userService.findAll().subscribe(
      response => {
        this.users = null;
        this.users = response;
      },
      error => {
        this.openSnackBar(error.error.message,"")
      }
    );
  }

  deleteUser(idUser: string): void {
    //Methos for delete user by id
    this.userService.delete(idUser).subscribe(
      response => {
        this.openSnackBar(response.message,"")
        this.getUsers()
      },
      error => {
        this.openSnackBar(error.error.message,"")
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
