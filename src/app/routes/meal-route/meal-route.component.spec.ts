import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealRouteComponent } from './meal-route.component';

describe('MealRouteComponent', () => {
  let component: MealRouteComponent;
  let fixture: ComponentFixture<MealRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
