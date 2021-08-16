import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMadeComponent } from './custom-made.component';

describe('CustomMadeComponent', () => {
  let component: CustomMadeComponent;
  let fixture: ComponentFixture<CustomMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
