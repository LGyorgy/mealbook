import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesRouteComponent } from './categories-route.component';

describe('CategoriesRouteComponent', () => {
  let component: CategoriesRouteComponent;
  let fixture: ComponentFixture<CategoriesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
