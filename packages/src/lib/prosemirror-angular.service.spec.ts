import { TestBed } from '@angular/core/testing';

import { ProsemirrorAngularService } from './prosemirror-angular.service';

describe('ProsemirrorAngularService', () => {
  let service: ProsemirrorAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProsemirrorAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
