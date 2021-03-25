import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoteCreateComponent } from './app-note-create.component';

describe('AppNoteCreateComponent', () => {
  let component: AppNoteCreateComponent;
  let fixture: ComponentFixture<AppNoteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNoteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
