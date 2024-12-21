import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthorizationEvent} from '../authorization.interface';

@Component({
  selector: 'app-registration',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registration.component.html',
  standalone: true,
  styleUrl: './registration.component.css'
})
export class RegistrationComponent{
  @Output() authorizationEvent = new EventEmitter<AuthorizationEvent>()

  public registrationForm: FormGroup = new FormGroup<any>({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });


  setEvent(): void {
    this.authorizationEvent.next({
      type: 'login'
    })
  }

  onSubmit(): void {
    localStorage.setItem('account', JSON.stringify(this.registrationForm.getRawValue()))
  }
}
