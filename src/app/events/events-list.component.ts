import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index";

//Here We are Passing Event1 Object from EVent List to Thumbnail Component
@Component({
  selector: "events-list",
  templateUrl: "events-list.component.html",
  styles: [``]
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      debugger;
      this.events = events;
    });
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
