import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeabvantagesComponent } from './homeabvantages.component';

describe('HomeabvantagesComponent', () => {
  let component: HomeabvantagesComponent;
  let fixture: ComponentFixture<HomeabvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeabvantagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeabvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
