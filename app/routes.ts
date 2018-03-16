import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';

export const appRoutes = [
    {path:'events/new',component:CreateEventComponent},
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]