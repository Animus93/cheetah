import {Component, Injectable, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-pricing',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './pricing.component.html',
  standalone: true,
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements OnDestroy {
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
