import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorPortfolioComponent } from './interior-portfolio.component';

describe('InteriorPortfolioComponent', () => {
  let component: InteriorPortfolioComponent;
  let fixture: ComponentFixture<InteriorPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
