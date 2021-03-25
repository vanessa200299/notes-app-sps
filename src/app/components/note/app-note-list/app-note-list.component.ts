//Component for show all notes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-list',
  templateUrl: './app-note-list.component.html',
  styleUrls: ['./app-note-list.component.css'],
  providers: [NoteService]
})
export class AppNoteListComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  notes: Note[] = [];

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    //Method for find all notes
    this.noteService.findAll().subscribe(
      response => {
        console.log(response);
        this.notes = null;
        this.notes = response;
      },
      error => {
        this.openSnackBar(error.error.message, "")
      }
    )
  }

  deleteNote(idNote: string): void {
    //Method for delet note by id
    this.noteService.delete(idNote).subscribe(
      response => {
        this.openSnackBar(response.message, "")
        this.getNotes();
      },
      error => {
        this.openSnackBar(error.error.message, "")
      }
    )
  }

  editNote(idNote: string): void {
    //Method for redirect to edit form
    this.router.navigate(['/note/edit/', idNote]);
  }

  getRelativeDateCreated(date: Date): string {
    //Method for get a formatted date text
    return moment(date).fromNow();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
