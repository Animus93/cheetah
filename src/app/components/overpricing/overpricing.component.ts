import { Component } from '@angular/core';
import {SliderComponent} from '../slider/slider.component';

@Component({
  selector: 'app-overpricing',
  imports: [
    SliderComponent
  ],
  templateUrl: './overpricing.component.html',
  standalone: true,
  styleUrl: './overpricing.component.css'
})
export class OverpricingComponent {

}
