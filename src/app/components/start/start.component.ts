import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-start',
  imports: [
    HeaderComponent
  ],
  templateUrl: './start.component.html',
  standalone: true,
  styleUrl: './start.component.css'
})
export class StartComponent {

}
