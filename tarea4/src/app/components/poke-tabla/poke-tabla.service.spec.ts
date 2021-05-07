import { TestBed } from '@angular/core/testing';

import { PoketablaService } from './poke-tabla.service';

describe('PoketablaService', () => {
  let service: PoketablaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoketablaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
