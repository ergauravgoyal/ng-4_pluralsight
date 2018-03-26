import { ISession } from './../shared/event.model';
import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions: ISession[];
}
