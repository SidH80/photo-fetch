import { TestBed } from '@angular/core/testing';

import { FetchPhotoService } from './fetch-photo.service';

describe('FetchPhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchPhotoService = TestBed.get(FetchPhotoService);
    expect(service).toBeTruthy();
  });
});
