import { Component } from '@angular/core';


//Here We are Passing Event1 Object from EVent List to Thumbnail Component
@Component({
    selector: 'events-list',
    template:`
    <div>
    <h1>
        Upcoming Angular Events
    </h1>
    <hr/>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
</div>
`
})

export class EventsListComponent {
    event1 = {
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
    handleEventClicked(data){
        console.log('received:',data);
    }
}