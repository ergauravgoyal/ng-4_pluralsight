import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
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
    `
  ]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  constructor(private auth: AuthService, private router: Router) {

  }
  ngOnInit() {
    // By Passing FirstName as argument it will prepopulate the value in form
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    // By Passing LastName as argument it will prepopulate the value in form
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validateLastName() {
    return this.lastName.valid && this.lastName.untouched;
  }
  // This method will basically change the value of FirstName in "Welcome Message"
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      // Calling updateCurrentUser method of AuthService
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
  cancel() {
    this.router.navigate(['events']);
  }
}
