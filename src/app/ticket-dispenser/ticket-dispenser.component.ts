import { SignalRService } from './../Services/signal-r.service';
import { TicketDispenserService } from './../Services/ticket-dispenser.service';
import { TicketCategory } from './../Models/ticket-category.model';
import { Ticket } from './../Models/ticket.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-dispenser',
  templateUrl: './ticket-dispenser.component.html',
  styleUrls: ['./ticket-dispenser.component.css'],
})
export class TicketDispenserComponent implements OnInit {
  ticketCategories: TicketCategory[] = [];

  constructor(
    private ticketDispenserService: TicketDispenserService,
    private signalRService: SignalRService
  ) {
    this.signalRService.ticketCategoryUpdated.subscribe((tc) =>
      this.updateTicketCategory(tc)
    );

    this.signalRService.TicketCategoryCreated.subscribe((tc) =>
      this.ticketCategories.push(tc)
    );

    this.signalRService.TicketCategoryDeleted.subscribe((tc) => {
       this.deleteTicketCategory(tc);
    });
  }

  ngOnInit(): void {
    this.loadAllTicketCategories();
    this.signalRService.startConnection();
    this.signalRService.addTicketCategoryUpdatedEventListener();
    this.signalRService.addTicketCategoryCreatedEventListener();
    this.signalRService.addTicketCategoryDeletedEventListener();
  }

  updateTicketCategory(updatedTicketCategory: TicketCategory): void {
    const indexToUpdate = this.ticketCategories.findIndex(
      (tc) => tc.id === updatedTicketCategory.id
    );
    this.ticketCategories[indexToUpdate] = updatedTicketCategory;
  }

  deleteTicketCategory(ticketCategory: TicketCategory): void {
    const deletedElement = this.ticketCategories.find(i => i.id === ticketCategory.id);
    this.ticketCategories.splice(this.ticketCategories.indexOf(deletedElement), 1);
  }

  loadAllTicketCategories(): void {
    this.ticketCategories = [];
    this.ticketDispenserService
      .getAllTicketCategories()
      .subscribe((categories) => {
        categories.map((category) => this.ticketCategories.push(category));
      });
  }
  onTicketRequested($event): void{
    const ticket = new Ticket();
    ticket.ticketCategoryId =  Number($event.target.value);
    console.log(ticket);
    this.ticketDispenserService.create(ticket).subscribe((ticketResponse) => console.log(ticketResponse));
  }
}
