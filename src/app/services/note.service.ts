import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable()
export class NoteService {

    constructor(private http: HttpClient) { }

    //Find all notes from api
    public findAll(): Observable<Note[]> {
        return this.http.get<Note[]>(environment.apiIUrl + '/notes');
    }

     //Find note by id from api
    public findByID(idNote): Observable<Note> {
        return this.http.get<Note>(environment.apiIUrl + '/notes/'+idNote);
    }

    //Send note to api to create new
    public create(note: Note): Observable<any> {
        return this.http.post<any>(environment.apiIUrl + '/notes', note);
    }

    //Send note to api to update
    public edit(note: Note, idNote:string): Observable<any> {
        return this.http.put<any>(environment.apiIUrl + '/notes/'+idNote, note);
    }

    //Send id note to delete
    public delete(idNote: string): Observable<any> {
        return this.http.delete<any>(environment.apiIUrl + '/notes/' + idNote);
    }
}