import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexShopFurnitureComponent } from './index-shop-furniture.component';

describe('IndexShopFurnitureComponent', () => {
  let component: IndexShopFurnitureComponent;
  let fixture: ComponentFixture<IndexShopFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexShopFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexShopFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
