import { TestBed } from '@angular/core/testing';

import { FoodieServiceService } from './foodie-service.service';

describe('FoodieServiceService', () => {
  let service: FoodieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
