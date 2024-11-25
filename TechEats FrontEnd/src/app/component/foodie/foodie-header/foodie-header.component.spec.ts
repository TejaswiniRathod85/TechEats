import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodieHeaderComponent } from './foodie-header.component';

describe('FoodieHeaderComponent', () => {
  let component: FoodieHeaderComponent;
  let fixture: ComponentFixture<FoodieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodieHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
