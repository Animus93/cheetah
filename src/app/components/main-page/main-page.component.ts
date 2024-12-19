import { Component } from '@angular/core';
import {StartComponent} from '../start/start.component';
import {PricingComponent} from '../pricing/pricing.component';
import {AboutComponent} from '../about/about.component';
import {OverpricingComponent} from '../overpricing/overpricing.component';
import {ContactBlockComponent} from '../contact-block/contact-block.component';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-main-page',
  imports: [
    StartComponent,
    PricingComponent,
    AboutComponent,
    OverpricingComponent,
    ContactBlockComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './main-page.component.html',
  standalone: true,
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
