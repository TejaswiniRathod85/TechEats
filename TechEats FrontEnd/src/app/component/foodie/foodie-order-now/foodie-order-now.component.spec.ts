import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieOrderNowComponent } from './foodie-order-now.component';

describe('FoodieOrderNowComponent', () => {
  let component: FoodieOrderNowComponent;
  let fixture: ComponentFixture<FoodieOrderNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieOrderNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieOrderNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
