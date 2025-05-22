import { NgForOf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-skills',
  imports: [NgForOf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillsComponent {

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
      title : "Docker",
      logo : "Logos/free-docker-logo-icon.png",
    },
  ]
}
