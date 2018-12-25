import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaiquyetquyenloiBHComponent } from './giaiquyetquyenloi-bh.component';

describe('GiaiquyetquyenloiBHComponent', () => {
  let component: GiaiquyetquyenloiBHComponent;
  let fixture: ComponentFixture<GiaiquyetquyenloiBHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaiquyetquyenloiBHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaiquyetquyenloiBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
