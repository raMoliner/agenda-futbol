import { TestBed } from '@angular/core/testing';

import { GoleadorService } from './goleador.service';

describe('GoleadorService', () => {
  let service: GoleadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoleadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
