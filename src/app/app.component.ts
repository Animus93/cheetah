import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cheetah';

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    const account = localStorage.getItem('account')
    if (account) {
      this.appService.account = JSON.parse(account)
    }
  }
}
