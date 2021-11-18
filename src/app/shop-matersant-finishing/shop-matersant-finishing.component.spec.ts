import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMatersantFinishingComponent } from './shop-matersant-finishing.component';

describe('ShopMatersantFinishingComponent', () => {
  let component: ShopMatersantFinishingComponent;
  let fixture: ComponentFixture<ShopMatersantFinishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMatersantFinishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMatersantFinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
