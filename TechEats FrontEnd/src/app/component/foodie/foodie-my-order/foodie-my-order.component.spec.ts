import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieMyOrderComponent } from './foodie-my-order.component';

describe('FoodieMyOrderComponent', () => {
  let component: FoodieMyOrderComponent;
  let fixture: ComponentFixture<FoodieMyOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieMyOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieMyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
