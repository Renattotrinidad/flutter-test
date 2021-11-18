import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccesoriesMateriaComponent } from './shop-accesories-materia.component';

describe('ShopAccesoriesMateriaComponent', () => {
  let component: ShopAccesoriesMateriaComponent;
  let fixture: ComponentFixture<ShopAccesoriesMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAccesoriesMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAccesoriesMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
