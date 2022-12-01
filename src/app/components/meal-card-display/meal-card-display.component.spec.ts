import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCardDisplayComponent } from './meal-card-display.component';

describe('MealCardDisplayComponent', () => {
  let component: MealCardDisplayComponent;
  let fixture: ComponentFixture<MealCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealCardDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
