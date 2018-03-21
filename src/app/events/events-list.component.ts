import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


//Here We are Passing Event1 Object from EVent List to Thumbnail Component
@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>
        Upcoming Angular Events
    </h1>
    <hr/>
    <div>
        <div  *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
</div>
`,
    styles: [
        `
    `
    ]
})

export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService, private toastr: ToastrService) {

    }
    ngOnInit() {
       this.eventService.getEvents().subscribe(events => { this.events = events })
    }
    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}