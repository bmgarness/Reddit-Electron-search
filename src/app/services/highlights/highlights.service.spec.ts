import { TestBed } from '@angular/core/testing';

import { HighlightsService } from './highlights.service';

describe('HighlightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightsService = TestBed.get(HighlightsService);
    expect(service).toBeTruthy();
  });
});
