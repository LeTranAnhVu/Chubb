import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinNguoiDuocBaoHiemComponent } from './thong-tin-nguoi-duoc-bao-hiem.component';

describe('ThongTinNguoiDuocBaoHiemComponent', () => {
  let component: ThongTinNguoiDuocBaoHiemComponent;
  let fixture: ComponentFixture<ThongTinNguoiDuocBaoHiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinNguoiDuocBaoHiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinNguoiDuocBaoHiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
