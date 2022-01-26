import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTwoComponent } from './detail-two.component';

describe('DetailTwoComponent', () => {
  let component: DetailTwoComponent;
  let fixture: ComponentFixture<DetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
