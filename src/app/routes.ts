import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator
} from './events/index';
import { Error404Component } from './errors/404.component';
import { UsersModule } from './user/users.module';
import { CreateSessionComponent } from './events/event-details';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'users', loadChildren: () => UsersModule }
];
