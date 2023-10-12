import { TestBed } from '@angular/core/testing';

import { EsportsService } from './esports.service';

describe('EsportsService', () => {
  let service: EsportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
