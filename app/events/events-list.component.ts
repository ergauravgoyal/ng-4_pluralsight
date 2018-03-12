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
    <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
    <h2>{{thumbnail.thumbnailMsg}}</h2>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
</div>
`,
styles:[
    `
    `
]
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
}