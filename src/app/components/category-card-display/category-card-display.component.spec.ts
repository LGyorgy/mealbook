import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardDisplayComponent } from './category-card-display.component';

describe('CategoryCardDisplayComponent', () => {
  let component: CategoryCardDisplayComponent;
  let fixture: ComponentFixture<CategoryCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCardDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
