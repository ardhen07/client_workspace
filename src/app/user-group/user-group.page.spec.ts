import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupPage } from './user-group.page';

describe('UserGroupPage', () => {
  let component: UserGroupPage;
  let fixture: ComponentFixture<UserGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
