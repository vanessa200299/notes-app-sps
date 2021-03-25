import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserIndexComponent } from './app-user-index.component';

describe('AppUserIndexComponent', () => {
  let component: AppUserIndexComponent;
  let fixture: ComponentFixture<AppUserIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUserIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
