import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventAppComponent } from './events-app.component';
import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent,EventRouteActivator } from './events';
import {EventService} from './events/shared/event.service'
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,    
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
        EventRouteActivator,
        ToastrService,
        {
          provide: 'canDeactivateCreateEvent',
          useValue: checkDirtyState
      }
    ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
      return window.confirm('You have not saved this Event . Do you really want to cancel');
  }
  return true;
}
