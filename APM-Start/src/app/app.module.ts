import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{EventsListComponent, EventThumbnailComponent, EventService, EventsDetailsComponent, CreateEventComponent, EventRouteActivator, EventListResolver} from './events/index'

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';


@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventsDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers:[
    EventService,
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    {provide:'canDeactivateCreateEvent',
    useValue: checkDirtyState}
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}
