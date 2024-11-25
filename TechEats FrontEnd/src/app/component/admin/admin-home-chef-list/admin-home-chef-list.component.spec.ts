import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeChefListComponent } from './admin-home-chef-list.component';

describe('AdminHomeChefListComponent', () => {
  let component: AdminHomeChefListComponent;
  let fixture: ComponentFixture<AdminHomeChefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHomeChefListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHomeChefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
