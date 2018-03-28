import { ISession } from '../shared/session.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'create-session',
    templateUrl: 'create-session.component.html',
    styles: [
      `
          em {
            float:right;
            color:#E05C65;
            padding-left:10px;
          }
          .error input,.error select ,.error textarea {
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
  
  export class CreateSessionComponent implements OnInit {
    sessionName: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;
    name: FormControl;
    newSessionForm: FormGroup;
    ngOnInit() {
      this.name = new FormControl('', Validators.required);
      this.presenter = new FormControl('', Validators.required);
      this.duration = new FormControl('', Validators.required);
      this.level = new FormControl('', Validators.required);
      // this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);
      this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);
      this.sessionName = new FormControl('', Validators.required);
      this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration: this.duration,
        abstract: this.abstract,
        level: this.level
      });
    }
    // private restrictedWords(words) {
    //     return (control: FormControl): { [key: string]: any } => {
    //         return control.value.includes('foo') ? ('restrictedWords' : 'foo'): null;
    //     };
    // }
    saveSession(formValues) {
      const session: ISession = {
        id: undefined,
        name: formValues.name,
        duration: formValues.duration,
        presenter: formValues.presenter,
        level: formValues.level,
        abstract: formValues.abstract,
        voters: []
      };
      console.log(session);
    }
  }
  