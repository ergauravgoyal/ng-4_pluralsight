import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styles: [
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
    @Input() event: IEvent;
    thumbnailMsg: any = 'This message from Child Component';
    logFoo() {
        console.log('Message from Child Component after button click');
    }
    getStartTimeClass(): any {
        if (this.event && this.event.time === '8:00 am') {
            return ['black', 'bold'];
        }
        return '';
    }
}
