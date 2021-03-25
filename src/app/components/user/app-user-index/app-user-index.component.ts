//Main component for user
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-index',
  templateUrl: './app-user-index.component.html',
  styleUrls: ['./app-user-index.component.css']
})
export class AppUserIndexComponent implements OnInit {

  constructor() { }

  eventsSubject: Subject<void> = new Subject<void>();

  ngOnInit(): void {
  }


  userAdded(user) {
    //Method for emit event of new user to app-user-list
    this.eventsSubject.next();
  }
}
