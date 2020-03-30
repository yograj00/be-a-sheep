import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  @ViewChild('healthSlider', {static: true})  slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  swipeNext() {
    this.slides.slideNext();
  }
}
