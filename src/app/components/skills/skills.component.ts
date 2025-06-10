import { NgForOf } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'app-skills',
  imports: [NgForOf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent implements AfterViewInit,OnInit{
  

  @ViewChild('swiperEl', { static: false }) swiperEl?: ElementRef;
  
  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    const swiper = this.swiperEl?.nativeElement;

    Object.assign(swiper, {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      navigation: true,
      loop: true,
      autoplay :{ delay: 3000, disableOnInteraction: false }
    });

    swiper.initialize();
    AOS.refresh();
  }

  techs = [
    {
      title : "Spring boot",
      logo : "Logos/spring-boot-logo_full.png",
    },
    {
      title : "Angular",
      logo : "Logos/angular_icon-logo.png",
    },
    {
      title : "React Native",
      logo : "Logos/reactnative-inner.svg",
    },
    {
      title : "Tailwind css",
      logo : "Logos/tailwind-css-logo.png",
    },
    {
      title : "Bootstrap",
      logo : "Logos/Bootstrap_logo.svg.png",
    },
    {
      title : "Mysql",
      logo : "Logos/free-mysql-logo-icon.webp",
    },
    {
      title : "PostgreSQL",
      logo : "Logos/Postgresql_elephant.svg.png",
    },
    {
      title : "Git",
      logo : "Logos/Git_icon.svg.png",
    },
    {
      title : "Jenkins",
      logo : "Logos/icons8-jenkins-144.png",
    },
    {
      title : "Docker",
      logo : "Logos/free-docker-logo-icon.png",
    },
    {
      title : "kubernetes",
      logo : "Logos/Kubernetes_logo_without_workmark.svg.png",
    },
    
  ]
}
