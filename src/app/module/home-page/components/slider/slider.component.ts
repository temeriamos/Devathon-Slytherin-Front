import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent{
  intervalId: any;
  currentIndex = 0;

 /* implementer observador  TODO */
  images = [
    'https://i.imgur.com/EsAFIZN.jpeg',
    'https://i.imgur.com/FXLYgGx.jpeg',
    'https://i.imgur.com/HU9pHlQ.jpeg',
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
