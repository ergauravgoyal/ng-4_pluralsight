import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventAppComponent } from './events-app.component';
import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, EventRouteActivator, SessionListComponent, CreateSessionComponent, DurationPipe} from './events';
import { EventService } from './events/shared/event.service'
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './users/auth.service';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component,
    SessionListComponent,
    CreateSessionComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropDownsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    EventRouteActivator,
    ToastrService,
    AuthService,
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
