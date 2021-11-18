import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopClothingComponent } from './shop-clothing.component';

describe('ShopClothingComponent', () => {
  let component: ShopClothingComponent;
  let fixture: ComponentFixture<ShopClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopClothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
