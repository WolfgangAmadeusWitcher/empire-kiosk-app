import { TicketDispenserComponent } from './ticket-dispenser/ticket-dispenser.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'customer-welcome', component: CustomerComponent },
  { path: 'ticket-dispenser', component: TicketDispenserComponent },
  { path: '**', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
