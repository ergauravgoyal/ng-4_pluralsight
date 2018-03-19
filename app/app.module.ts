import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator
} from './events/index'
import { EventAppComponent } from './events-app.component';;
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

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
function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this Event . Do you really want to cancel');
    }
    return true;
}