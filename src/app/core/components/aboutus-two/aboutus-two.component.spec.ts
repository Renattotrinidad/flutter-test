import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusTwoComponent } from './aboutus-two.component';

describe('AboutusTwoComponent', () => {
  let component: AboutusTwoComponent;
  let fixture: ComponentFixture<AboutusTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutusTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
