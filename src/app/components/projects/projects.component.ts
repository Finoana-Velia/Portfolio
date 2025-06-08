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
      //description : "This project is an application for managing delivery items and online orders for a clothing retail company. It also includes other features such as authentication and security, displaying and viewing orders from a calendar, all of which are integrated and deployed automatically.",
      description : "Ce projet est une application de gestion des articles livrés et des commandes en ligne pour une entreprise de vente de vêtements. Elle inclut également d'autres fonctionnalités telles que l'authentification et la sécurité, ainsi que l'affichage et la consultation des commandes à partir d'un calendrier, toutes intégrées et déployées automatiquement.",
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
      ],
      repos : "https://github.com/Finoana-Velia/Lisiniarivo-back.git",
    },

    {
      title : "RestFood and Bakery",
      background : "Projects/homes/restfood&bakery.png",
      monitor : "Projects/details/bakery-web-mobile.png",
      //description : "RestFood & Bakery is a restaurant application that allows users to place orders online according to their choice from the menu, a menu that is managed from a secure administrator space. RestFood also has a mobile part currently under development that allows ordinary users to use their smartphone as a support whether on Android or IOS.",
      description : "RestFood & Bakery est une application de restauration permettant aux utilisateurs de commander en ligne selon leur choix à la carte, gérée depuis un espace administrateur sécurisé. RestFood propose également une version mobile en cours de développement permettant aux utilisateurs d'utiliser leur smartphone, qu'il soit sous Android ou iOS.",
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
      ],
      repos : "https://github.com/Finoana-Velia/Recipe.git"
    },

    {
      title : "Gasy Tube",
      background : "Projects/homes/gasytube.png",
      monitor : "Projects/details/gasytube-web-mobile.png",
      //description : "It is an application allowing you to consult a film catalog from your smartphone with the title and the actors who participate in it. All the data is managed by a web interface to carry out CRUD actions.",
      description : "Il s'agit d'une application permettant de consulter un catalogue de films depuis votre smartphone, avec le titre et les acteurs qui y participent. Toutes les données sont gérées par une interface web pour effectuer des actions CRUD.",
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
      ],
      repos : "https://github.com/Finoana-Velia/Movie.git"
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
