//Component for add and edit notes
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { User } from 'src/app/models/user';
import { NoteService } from 'src/app/services/note.service';
import { UserService } from 'src/app/services/user.service';

//Class for get errors on form
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-note-create',
  templateUrl: './app-note-create.component.html',
  styleUrls: ['./app-note-create.component.css'],
  providers: [UserService, NoteService]
})
export class AppNoteCreateComponent implements OnInit {

  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  users: User[] = [];
  noteForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  // id of the note to edit
  idNoteEdit: string=null;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.idNoteEdit = params.id;
    });

    this.noteForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),
      content: new FormControl('', [
        Validators.required,
      ]),
      user: new FormControl('', [
        Validators.required,
      ]),
    });

    //If idNoteEdit exist we find  the note
    if (this.idNoteEdit) {
      this.noteService.findByID(this.idNoteEdit).subscribe(
        response => {
          //Then fill the form with the note information
          this.noteForm.get('title').setValue(response.title);
          this.noteForm.get('content').setValue(response.content);
          this.noteForm.get('user').setValue(response.user);
        },
        error => {
          console.log(error)
        }
      );

    }

    //Find all users for fill the select in the form
    this.userService.findAll().subscribe(
      response => {
        this.users = null;
        this.users = response;
      },
      error => {
        console.log(error)
      }
    );
  }

  submitNote(): void {
    //Method for edit or add note

    //Create a Note object with the form information
    var note = new Note();
    note.title = this.noteForm.get('title').value
    note.content = this.noteForm.get('content').value
    note.user = this.noteForm.get('user').value
    //If i NoteEdit exists, update if not add a note
    if (this.idNoteEdit) {
      this.editNote(note);
    } else {
      this.addNote(note)
    }
  }
  addNote(note: Note): void {
    //Method for add note
    this.noteService.create(note).subscribe(
      response => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error)
      }
    )
  }

  editNote(note: Note): void {
     //Method for edit note
    this.noteService.edit(note,this.idNoteEdit).subscribe(
      response => {
        this.router.navigate(['']);
      },
      error => {
        console.log(error)
      }
    )
  }

}
