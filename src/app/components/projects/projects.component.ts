import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projectSelected : any = null;
  
  projects = [
    {
      title : "Lisiniarivo Clothing and store",
      background : "Projects/homes/lisiniarivo.png",
      monitor : "Projects/details/lisiniarivo-web.png",
      description : "C'était mon premier contrat en freelance, la société Lisiniarivo Clothing and store m'a proposer de développer une application permettant de gérer leurs articles, leurs livreurs et leurs commandes mais aussi avec d'autres fonctionnalités supplémentaires comme la gestion de l'authentification et sécurité, l'affichage et la consultation des commandes à partir d'un calendri et enfin l'automatisation des intégration et le déploiement",
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
      description : "RestFood & Bakery est une application de restauration permettant au utilisateur de passer des commandes en ligne selon son choix dans le menu, menu qui est géré à parti d'un espace administrateur et sécuriser. RestFood possède aussi une partie mobile en cours de développement permettant aux simple utilisateur d'utiliser leur smartphone comme support que se soit sur android ou sur IOS",
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
      description : "C'est une application permettant de consulter un catalogue de film à partir de son smartphone avec le titre ainsi les acteurs qui y participe Toutes les données sont gérer par une interface web pour effectuer les actions de CRUDs, c'est en développant ce projets que j'ai fait mes premiers pas dans le développement Full Stack",
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
  ]

  ngOnInit(): void {
    this.projectSelected = this.projects[0];
  }

  selectProject(project : any) {
    this.projectSelected = project;
  }

}
