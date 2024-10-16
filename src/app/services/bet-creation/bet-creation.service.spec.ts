import { TestBed } from '@angular/core/testing';

import { BetCreationService } from './bet-creation.service';

describe('BetCreationService', () => {
  let service: BetCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
