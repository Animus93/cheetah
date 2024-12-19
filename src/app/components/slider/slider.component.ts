import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit, ViewChild,
  ViewChildren,
  viewChildren
} from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  standalone: true,
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, AfterViewInit {
  private width = 1;
  private count = 0;
  @ViewChildren('sliderItem') sliderItems: ElementRef[];
  @ViewChild('sliderLine') sliderLine: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    window.addEventListener('resize', () => this.init());

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.init()
      this.next()
    }, 100)

  }

  init(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    this.sliderLine.nativeElement.style.width = this.width * this.sliderItems.length + 'px'
    this.width = slider.offsetWidth;
    this.sliderItems.forEach(img => {
      const item = (img.nativeElement as HTMLElement)
      item.style.width = this.width + 'px'
      item.style.height = 'auto'
    })
    this.rollSlide()
    this.cdr.detectChanges()
  }

  prev(): void {
    this.count -= 1
    if (this.count < 0) {
      this.count = this.sliderItems.length - 1
    }
    this.rollSlide()
  }

  next(): void {
    this.count += 1
    if (this.count >= this.sliderItems.length) {
      this.count = 0
    }

    this.rollSlide()
  }

  rollSlide(): void {
    console.log('rollSlide')
    this.sliderLine.nativeElement.style.transform = 'translate(-' + this.count * this.width + 'px)';
  }
}
