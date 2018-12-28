import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaOnlineComponent } from './mua-online.component';

describe('MuaOnlineComponent', () => {
  let component: MuaOnlineComponent;
  let fixture: ComponentFixture<MuaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
