import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellerPage } from './reseller.page';

describe('ResellerPage', () => {
  let component: ResellerPage;
  let fixture: ComponentFixture<ResellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResellerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
