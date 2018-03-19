import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import NavBarComponent from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-route-activator.service';
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventAppComponent, EventsListComponent,
        EventDetailsComponent,
        EventThumbnailComponent,
        NavBarComponent,
        CreateEventComponent, Error404Component],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventAppComponent]
})

export class AppModule {

}
function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty){
        return window.confirm('You have not saved this Event . Do you really want to cancel');
    }
    return true;
}