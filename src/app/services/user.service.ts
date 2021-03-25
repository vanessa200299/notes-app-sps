import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    //Find all users from api
    public findAll(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiIUrl + '/users');
    }
    //Send user to api to create new
    public create(user: User): Observable<any> {
        return this.http.post<any>(environment.apiIUrl + '/users', user);
    }

    //Send id user to delete
    public delete(idUser: string): Observable<any> {
        return this.http.delete<any>(environment.apiIUrl + '/users/' + idUser);
    }
}