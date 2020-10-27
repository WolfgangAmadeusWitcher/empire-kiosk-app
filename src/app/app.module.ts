import { SignalRService } from './Services/signal-r.service';
import { TicketDispenserService } from './Services/ticket-dispenser.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TicketDispenserComponent } from './ticket-dispenser/ticket-dispenser.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TicketDispenserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, TicketDispenserService, SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
