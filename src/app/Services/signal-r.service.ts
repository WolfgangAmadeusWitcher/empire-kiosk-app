import { TicketCategory } from './../Models/ticket-category.model';
import { Injectable, Output, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalRService {
  @Output() ticketCategoryUpdated = new EventEmitter<TicketCategory>();
  @Output() TicketCategoryCreated = new EventEmitter<TicketCategory>();
  @Output() TicketCategoryDeleted = new EventEmitter<TicketCategory>();

  public data: TicketCategory;
  private hubConnection: signalR.HubConnection;

  public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/ticket-category')
      .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch((err) => console.log('Error while starting connection: ' + err));
  }

  public addTicketCategoryUpdatedEventListener(): void {
    this.hubConnection.on('ticket-category-updated-event', (data) => {
      this.data = data;
      this.ticketCategoryUpdated.emit(this.data);
    });
  }
  public addTicketCategoryCreatedEventListener(): void {
    this.hubConnection.on('ticket-category-created-event', (data) => {
      this.data = data;
      this.TicketCategoryCreated.emit(this.data);
    });
  }

  public addTicketCategoryDeletedEventListener(): void {
    this.hubConnection.on('ticket-category-deleted-event', (data) => {
      this.data = data;
      this.TicketCategoryDeleted.emit(this.data);
    });
  }
}
