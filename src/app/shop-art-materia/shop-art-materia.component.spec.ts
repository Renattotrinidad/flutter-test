import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopArtMateriaComponent } from './shop-art-materia.component';

describe('ShopArtMateriaComponent', () => {
  let component: ShopArtMateriaComponent;
  let fixture: ComponentFixture<ShopArtMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopArtMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopArtMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
