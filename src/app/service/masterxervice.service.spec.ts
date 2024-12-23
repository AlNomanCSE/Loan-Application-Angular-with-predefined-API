import { TestBed } from '@angular/core/testing';

import { MasterxerviceService } from './masterxervice.service';

describe('MasterxerviceService', () => {
  let service: MasterxerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterxerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
