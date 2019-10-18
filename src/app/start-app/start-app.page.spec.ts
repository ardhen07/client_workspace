import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAppPage } from './start-app.page';

describe('StartAppPage', () => {
  let component: StartAppPage;
  let fixture: ComponentFixture<StartAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
