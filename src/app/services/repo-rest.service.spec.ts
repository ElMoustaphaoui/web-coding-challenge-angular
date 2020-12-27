import { TestBed } from '@angular/core/testing';

import { RepoRestService } from './repo-repo-rest.service';

describe('RepoRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoRestService = TestBed.get(RepoRestService);
    expect(service).toBeTruthy();
  });
});
