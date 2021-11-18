import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexUpcycledComponent } from './index-upcycled.component';

describe('IndexUpcycledComponent', () => {
  let component: IndexUpcycledComponent;
  let fixture: ComponentFixture<IndexUpcycledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexUpcycledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexUpcycledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
