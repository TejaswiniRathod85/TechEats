import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieHomeComponent } from './foodie-home.component';

describe('FoodieHomeComponent', () => {
  let component: FoodieHomeComponent;
  let fixture: ComponentFixture<FoodieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
