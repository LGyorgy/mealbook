import { TestBed } from '@angular/core/testing';

import { TheMealDbApiService } from './the-meal-db-api.service';

describe('TheMealDbApiService', () => {
  let service: TheMealDbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMealDbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
