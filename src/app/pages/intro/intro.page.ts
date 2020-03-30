import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  @ViewChild('introSlider', {static: true})  slides: IonSlides;

  constructor(private route: Router) { }

  swipeNext() {
    this.slides.slideNext();
  }

  ngOnInit() {
  }

  gotoOverview() {
    this.route.navigate(['/']);
  }
  
}
