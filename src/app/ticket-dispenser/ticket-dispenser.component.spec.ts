import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDispenserComponent } from './ticket-dispenser.component';

describe('TicketDispenserComponent', () => {
  let component: TicketDispenserComponent;
  let fixture: ComponentFixture<TicketDispenserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDispenserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDispenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
