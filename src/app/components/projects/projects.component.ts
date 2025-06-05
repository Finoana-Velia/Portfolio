import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit,AfterViewInit{


  projectSelected : any = null;
  
  projects = [
    {
      title : "Clothing and store",
      background : "Projects/homes/lisiniarivo.png",
      monitor : "Projects/details/lisiniarivo-web.png",
      description : "This project is an application for managing delivery items and online orders for a clothing retail company. It also includes other features such as authentication and security, displaying and viewing orders from a calendar, all of which are integrated and deployed automatically.",
      url : "",
      technologies: [
        {
          title : "Spring boot",
          logo : "Logos/spring-boot-logo_full.png",
        },
        {
          title : "Angular",
          logo : "Logos/angular_icon-logo.png",
        },
        {
          title : "Tailwind css",
          logo : "Logos/tailwind-css-logo.png",
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
    },

    {
      title : "RestFood and Bakery",
      background : "Projects/homes/restfood&bakery.png",
      monitor : "Projects/details/bakery-web-mobile.png",
      description : "RestFood & Bakery is a restaurant application that allows users to place orders online according to their choice from the menu, a menu that is managed from a secure administrator space. RestFood also has a mobile part currently under development that allows ordinary users to use their smartphone as a support whether on Android or IOS.",
      url : "",
      technologies : [
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
          title : "Mysql",
          logo : "Logos/free-mysql-logo-icon.webp",
        },
        {
          title : "Git",
          logo : "Logos/Git_icon.svg.png",
        },
      ]
    },

    {
      title : "Gasy Tube",
      background : "Projects/homes/gasytube.png",
      monitor : "Projects/details/gasytube-web-mobile.png",
      description : "It is an application allowing you to consult a film catalog from your smartphone with the title and the actors who participate in it. All the data is managed by a web interface to carry out CRUD actions.",
      url : "",
      technologies : [
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
          title : "Mysql",
          logo : "Logos/free-mysql-logo-icon.webp",
        },
        {
          title : "Git",
          logo : "Logos/Git_icon.svg.png",
        },
      ]
    },
  ];

  showTooltip : boolean = false;


  ngOnInit(): void {
    this.projectSelected = this.projects[0];
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

  selectProject(project : any) {
    this.projectSelected = project;
  }

  checkOverFlow(event : MouseEvent) {
    const target = event.target as HTMLElement;
    this.showTooltip = target.scrollWidth > target.clientWidth;
  }

  hideToolTip() {
    this.showTooltip = false;
  }



}
