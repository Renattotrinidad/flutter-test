import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMateriaDecorComponent } from './index-materia-decor.component';

describe('IndexMateriaDecorComponent', () => {
  let component: IndexMateriaDecorComponent;
  let fixture: ComponentFixture<IndexMateriaDecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMateriaDecorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexMateriaDecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
