import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IEvent} from './shared/index'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date :{{event.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time :{{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price : \${{ event.price }}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event.location?.address}}</span>
                <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
            </div>
            <div *ngIf="event.onLineUrl">
            <span>Online Url:  {{event.onLineUrl}}</span>
            </div>
        </div>
    `,
    styles:[
        `.black{
            color:#000000 !important;
        }
        .bold{
            font-weight:bold !important;
        }
        .pad-left{
            margin-left:10px;
        }
        .well div{
            color:#bbb;
        }
        .thumbnail{
            min-height:210px;
        }
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event:IEvent;
    thumbnailMsg:any="This message from Child Component";
    logFoo(){
        console.log("Message from Child Component after button click");
    }
    getStartTimeClass():any{
        if(this.event && this.event.time==='8:00 am')
            return ["black","bold"]
        return ""
    }
}