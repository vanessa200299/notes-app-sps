import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoteListComponent } from './app-note-list.component';

describe('AppNoteListComponent', () => {
  let component: AppNoteListComponent;
  let fixture: ComponentFixture<AppNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
