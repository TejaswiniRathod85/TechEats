import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieMealPlanComponent } from './foodie-meal-plan.component';

describe('FoodieMealPlanComponent', () => {
  let component: FoodieMealPlanComponent;
  let fixture: ComponentFixture<FoodieMealPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieMealPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
