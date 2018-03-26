import { EventService } from './event.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'create-event.component.html',
    styles: [
        `
        em {
          float:right;
          color:#E05C65;
          padding-left:10px;
        }
        .error input {
          background-color:#E3C3C5;
        }
        .error ::-webkit-input-placeholder{
          color:#999;
        }
        .error ::-moz-placeholder{
          color:#999;
        }
        .error :-moz-placeholder {
          color:#999;
        }
        .error :ms-input-placeholder {
          color:#999;
        }
        `]
})

export class CreateEventComponent implements OnInit {
    isDirty = true;
    event: any;
    constructor(private router: Router, private eventService: EventService) {
    }
    ngOnInit() {
        this.event = {
            name: 'Ng Spectacular',
            date: '26/03/2018',
            time: '10am',
            price: '324.89',
            location: {
                address: 'Magarpatta City',
                city: 'Pune',
                country: 'India'
            },
            onlineUrl: 'https://ngSpectacular.com',
            imageUrl: 'https://ngSpectacular.com/logo.png'
        };
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
