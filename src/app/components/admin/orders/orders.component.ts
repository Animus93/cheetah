import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-orders',
  imports: [
    DatePipe
  ],
  templateUrl: './orders.component.html',
  standalone: true,
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
