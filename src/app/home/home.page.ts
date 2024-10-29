import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'https://images.crowdspring.com/blog/wp-content/uploads/2023/05/16174534/bakery-hero.png',
    'https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY=',
    'https://cdn.vox-cdn.com/thumbor/asoX4fSv_-t7PapIPVK1dsrPM7Y=/0x0:3024x4032/1200x900/filters:focal(1691x1908:2173x2390)/cdn.vox-cdn.com/uploads/chorus_image/image/63894484/IMG_9124.63.jpeg']


    //atributo para animación

    private animation!:Animation;
    private animation2!:Animation;
    private animation3!:Animation;
    private animation4!:Animation;
    private animation5!:Animation;

    //----------------------------

  constructor(private aCtrl:AnimationController) {}

  //Animación

  ngAfterViewInit(){

    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.title') as HTMLElement)
    .iterations(1)
    .duration(1500)
    .fromTo("opacity", "0", "1")

    this.animation2 = this.aCtrl.create()
    .addElement(document.querySelector('.title2') as HTMLElement)
    .iterations(1)
    .duration(1500)
    .fromTo("opacity", "0", "1")

    this.animation3 = this.aCtrl.create()
    .addElement(document.querySelector('.img1') as HTMLElement)
    .iterations(1)
    .duration(1500)
    .fromTo("opacity", "0", "1")

    this.animation4 = this.aCtrl.create()
    .addElement(document.querySelector('.title3') as HTMLElement)
    .iterations(1)
    .duration(1500)
    .fromTo("opacity", "0", "1")

    this.animation5 = this.aCtrl.create()
    .addElement(document.querySelector('.box') as HTMLElement)
    .iterations(1)
    .duration(1500)
    .fromTo("opacity", "0", "1")

    this.animation.play();
    this.animation2.play();
    this.animation3.play();
    this.animation4.play();
    this.animation5.play();

  }

  //----------------------------

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

}
