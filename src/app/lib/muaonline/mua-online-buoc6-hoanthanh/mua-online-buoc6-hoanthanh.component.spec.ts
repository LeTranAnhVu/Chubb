import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineBuoc6HoanthanhComponent } from './mua-online-buoc6-hoanthanh.component';

describe('MuaOnlineBuoc6HoanthanhComponent', () => {
  let component: MuaOnlineBuoc6HoanthanhComponent;
  let fixture: ComponentFixture<MuaOnlineBuoc6HoanthanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineBuoc6HoanthanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineBuoc6HoanthanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
