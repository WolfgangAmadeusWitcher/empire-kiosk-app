import { Ticket } from './../Models/ticket.model';
import { TicketCategory } from './../Models/ticket-category.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketDispenserService {
  url = 'https://localhost:5001/TicketCategory';
  ticketUrl = 'https://localhost:5001/Ticket';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  getAllTicketCategories(): Observable<TicketCategory[]> {
    return this.http.get<TicketCategory[]>(this.url + '/GetCategories');
  }

  create(obj: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(
      this.ticketUrl + '/Create',
      obj,
      {
        headers: this.headers,
      }
    );
  }
}
