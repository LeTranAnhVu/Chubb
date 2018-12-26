import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinLienLacComponent } from './thong-tin-lien-lac.component';

describe('ThongTinLienLacComponent', () => {
  let component: ThongTinLienLacComponent;
  let fixture: ComponentFixture<ThongTinLienLacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinLienLacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLienLacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
