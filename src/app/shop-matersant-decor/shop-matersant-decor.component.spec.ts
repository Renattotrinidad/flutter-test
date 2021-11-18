import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMatersantDecorComponent } from './shop-matersant-decor.component';

describe('ShopMatersantDecorComponent', () => {
  let component: ShopMatersantDecorComponent;
  let fixture: ComponentFixture<ShopMatersantDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMatersantDecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMatersantDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
