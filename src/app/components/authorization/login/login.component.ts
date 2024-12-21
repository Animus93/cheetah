import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthorizationEvent} from '../authorization.interface';
import {Account} from '../account.interface';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @Output() authorizationEvent = new EventEmitter<AuthorizationEvent>()
  public loginForm: FormGroup = new FormGroup<any>({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private appService: AppService, private router: Router) {
  }

  ngOnInit() {
    console.log('1', this.appService.account)

    if (this.appService.account) {
      this.loginForm.patchValue({
        login: this.appService.account.login,
        password: this.appService.account.password,
      })

    }
  }

  onSubmit(): void {
    if ((this.appService.account.login === this.loginForm.getRawValue().login) && (this.appService.account.password === this.loginForm.getRawValue().password)) {
      this.router.navigate(['admin'])
    } else {
      alert('неправильный логин или пароль')
    }

  }

  setEvent(): void {
    this.authorizationEvent.next({
      type: 'registration'
    })
  }

  protected readonly onsubmit = onsubmit;
}
