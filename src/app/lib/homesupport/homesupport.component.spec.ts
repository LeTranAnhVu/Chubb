import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesupportComponent } from './homesupport.component';

describe('HomesupportComponent', () => {
  let component: HomesupportComponent;
  let fixture: ComponentFixture<HomesupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
