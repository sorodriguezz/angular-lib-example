import { TestBed } from '@angular/core/testing';

import { NgxMylibraryService } from './ngx-mylibrary.service';

describe('NgxMylibraryService', () => {
  let service: NgxMylibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMylibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
