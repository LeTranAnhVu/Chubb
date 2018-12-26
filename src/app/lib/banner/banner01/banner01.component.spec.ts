import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner01Component } from './banner01.component';

describe('Banner01Component', () => {
  let component: Banner01Component;
  let fixture: ComponentFixture<Banner01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
