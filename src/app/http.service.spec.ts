import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const http: HttpService = TestBed.get(HttpService);
    expect(http).toBeTruthy();
  });
});
