import { Routes } from '@angular/router'
import { EventsListComponent } from "./events/events-list.component";
import { EventsDetailsComponent } from './events/event-details/events-details.component';
import { CreateEventComponent } from './events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/shared/event-list-resolver.service';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}},
  { path: 'events/:id', component: EventsDetailsComponent ,canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component},
  { path:'', redirectTo: '/events', pathMatch: 'full'}
]
