import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthorizationEvent} from './authorization.interface';
import {Account} from './account.interface';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-authorization',
  imports: [
    RouterLink,
    LoginComponent,
    RegistrationComponent
  ],
  templateUrl: './authorization.component.html',
  standalone: true,
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent implements OnInit {

  public authorizationType: 'login' | 'registration' = 'registration'
  public account: Account = null

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    if (this.appService.account) {
      this.authorizationType = 'login'
    }
  }

  authorizationEventHandler(event: AuthorizationEvent): void {
    this.authorizationType = event.type
    console.log('this.authorizationType', this.authorizationType)
  }
}
