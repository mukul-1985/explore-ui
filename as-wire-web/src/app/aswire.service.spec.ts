import { TestBed } from '@angular/core/testing';

import { AswireService } from './aswire.service';

describe('AswireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AswireService = TestBed.get(AswireService);
    expect(service).toBeTruthy();
  });
});
