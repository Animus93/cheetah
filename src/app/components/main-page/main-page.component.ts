import { Component } from '@angular/core';
import {StartComponent} from '../start/start.component';
import {PricingComponent} from '../pricing/pricing.component';

@Component({
  selector: 'app-main-page',
  imports: [
    StartComponent,
    PricingComponent
  ],
  templateUrl: './main-page.component.html',
  standalone: true,
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
