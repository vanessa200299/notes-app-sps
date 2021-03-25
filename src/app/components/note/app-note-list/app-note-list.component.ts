//Component for show all notes
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import * as moment from 'moment';

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
  ) { }

  notes: Note[] = [];

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    //Method for find all notes
    this.noteService.findAll().subscribe(
      response => {
        this.notes = null;
        this.notes = response;
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteNote(idNote: string): void {
    //Method for delet note by id
    this.noteService.delete(idNote).subscribe(
      response => {
        this.getNotes();
      },
      error => {
        console.log(error)
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
}
