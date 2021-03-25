//Component for add users
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

//Class for get errors on form
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-create',
  templateUrl: './app-user-create.component.html',
  styleUrls: ['./app-user-create.component.css'],
  providers: [UserService]
})
export class AppUserCreateComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
    ) { }

  userFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  @Output() userAdded = new EventEmitter();

  ngOnInit(): void {
  }

  newUser(): void {
    //Method for add user
    const newUser = new User();
    newUser.name = this.userFormControl.value;
    const userForm = document.getElementById("userForm") as HTMLFormElement
    userForm.reset()
    this.userService.create(newUser).subscribe(
      response => {
        //Emit event of new user to app-user-index
        this.openSnackBar(response.message, "")
        this.userAdded.emit(newUser);
      },
      error => {
        this.openSnackBar(error.error.message, "")
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
