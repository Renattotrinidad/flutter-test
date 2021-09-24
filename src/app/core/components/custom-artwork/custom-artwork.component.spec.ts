import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomArtworkComponent } from './custom-artwork.component';

describe('CustomArtworkComponent', () => {
  let component: CustomArtworkComponent;
  let fixture: ComponentFixture<CustomArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomArtworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
