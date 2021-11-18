import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccesoriesComponent } from './shop-accesories.component';

describe('ShopAccesoriesComponent', () => {
  let component: ShopAccesoriesComponent;
  let fixture: ComponentFixture<ShopAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAccesoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
