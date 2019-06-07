import { TestBed } from '@angular/core/testing';

import { AsyncBehaviorService } from './async-behavior.service';

describe('AsyncBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncBehaviorService = TestBed.get(AsyncBehaviorService);
    expect(service).toBeTruthy();
  });
});
