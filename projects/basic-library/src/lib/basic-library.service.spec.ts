import { TestBed } from '@angular/core/testing';

import { BasicLibraryService } from './basic-library.service';

describe('BasicLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicLibraryService = TestBed.get(BasicLibraryService);
    expect(service).toBeTruthy();
  });
});
