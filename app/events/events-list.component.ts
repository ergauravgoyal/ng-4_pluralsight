import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '12/03/2018',
        time: '10:00 AM',
        price: 599.99,
        imageUrl: '/app/assets/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}