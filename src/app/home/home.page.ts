import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

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

  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }

}
