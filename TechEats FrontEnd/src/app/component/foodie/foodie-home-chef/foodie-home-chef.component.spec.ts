import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieHomeChefComponent } from './foodie-home-chef.component';

describe('FoodieHomeChefComponent', () => {
  let component: FoodieHomeChefComponent;
  let fixture: ComponentFixture<FoodieHomeChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieHomeChefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieHomeChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
