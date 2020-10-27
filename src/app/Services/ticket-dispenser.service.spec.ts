import { TestBed } from '@angular/core/testing';

import { TicketDispenserService } from './ticket-dispenser.service';

describe('TicketDispenserService', () => {
  let service: TicketDispenserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketDispenserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
