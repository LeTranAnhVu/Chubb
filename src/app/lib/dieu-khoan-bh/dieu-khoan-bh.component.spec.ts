import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieuKhoanBHComponent } from './dieu-khoan-bh.component';

describe('DieuKhoanBHComponent', () => {
  let component: DieuKhoanBHComponent;
  let fixture: ComponentFixture<DieuKhoanBHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieuKhoanBHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieuKhoanBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
