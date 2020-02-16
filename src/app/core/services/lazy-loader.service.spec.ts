import { TestBed } from '@angular/core/testing';

import { LazyLoaderService } from './lazy-loader.service';

describe('LazyLoaderService', () => {
  let service: LazyLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
