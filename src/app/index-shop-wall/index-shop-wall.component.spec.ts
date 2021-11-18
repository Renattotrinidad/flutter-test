import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShopWallComponent } from './index-shop-wall.component';

describe('IndexShopWallComponent', () => {
  let component: IndexShopWallComponent;
  let fixture: ComponentFixture<IndexShopWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShopWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexShopWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
