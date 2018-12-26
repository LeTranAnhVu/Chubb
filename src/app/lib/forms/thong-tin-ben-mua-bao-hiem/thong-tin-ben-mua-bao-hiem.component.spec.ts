import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinBenMuaBaoHiemComponent } from './thong-tin-ben-mua-bao-hiem.component';

describe('ThongTinBenMuaBaoHiemComponent', () => {
  let component: ThongTinBenMuaBaoHiemComponent;
  let fixture: ComponentFixture<ThongTinBenMuaBaoHiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinBenMuaBaoHiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinBenMuaBaoHiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
