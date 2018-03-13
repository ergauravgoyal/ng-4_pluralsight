import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import NavBarComponent from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import {RouterModule} from '@angular/router';
import { CreateEventComponent } from './events/shared/create-event.component';

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(appRoutes)],
    declarations: [EventAppComponent, EventsListComponent,
        EventDetailsComponent,
        EventThumbnailComponent,
        NavBarComponent,
    CreateEventComponent],
    providers:[EventService,ToastrService],
    bootstrap: [EventAppComponent]
})

export class AppModule {

}