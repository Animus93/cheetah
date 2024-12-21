import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe} from '@angular/common';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-admin',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    DatePipe
  ],
  templateUrl: './admin.component.html',
  standalone: true,
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  public currentTime: Date;
  public userName: string = 'Admin'

  constructor(private appService: AppService) {
    this.currentTime = new Date();
  }

  ngOnInit() {
    if (this.appService.account) {
      this.userName = this.appService.account.login
    }
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}
