import { TestBed } from '@angular/core/testing';

import { RepoRestServiceService } from './repo-rest-service.service';

describe('RepoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoRestServiceService = TestBed.get(RepoRestServiceService);
    expect(service).toBeTruthy();
  });
});
