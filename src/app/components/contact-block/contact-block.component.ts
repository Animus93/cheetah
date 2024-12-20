import { Component } from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-contact-block',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact-block.component.html',
  standalone: true,
  styleUrl: './contact-block.component.css'
})
export class ContactBlockComponent {
  private unsubscribeAll = new Subject<void>();
  public form = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    phone: new FormControl('+7 959 ', [Validators.required]),
    comment: new FormControl(''),
  })

  constructor(private appService: AppService) {
  }

  onSubmit(): void {
    const prepareData = this.form.getRawValue()
    prepareData.phone = prepareData.phone.replace(/\s+/g, '');
    this.appService.createOrder(prepareData).pipe(takeUntil(this.unsubscribeAll)).subscribe(data => {
      if (data) {
        this.form.setValue({
          name: '',
          phone: '+7 959 ',
          comment: ''
        })
      }
    })
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(null)
    this.unsubscribeAll.complete()
  }
}
