import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title : "Lisiniarivo Clothing and store",
      description : "C'était ma première contrat en freelance, la société Lisiniarivo Clothing and store m'a proposer de développer une application permettant de gérer leurs articles leurs livreurs et leurs commande mais aussi avec d'autres fonctionnalités supplémentaires comme la gestion de l'authentification et sécurité, l'affichage et la consultation des commandes à partir d'un calendri et enfin l'automatisation des intégration et le déploiement",
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
      title : "ORA",
      description : "ORA était à la base un dispositif destiné à enregistrer les entrées et sorties des employés d'une organisation. C'est par la suite que l'entreprise MDG-IT à decider de l'améliorer en lui intégran une interface administrateur mais aussi d'avoir le contrôle sur les activités professionnelles de la totalité des salariés voir même de plusieurs sociétés en même temps",
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
          title : "Bootstrap",
          logo : "Logos/Bootstrap_logo.svg.png",
        },
        {
          title : "PostgreSQL",
          logo : "Logos/Postgresql_elephant.svg.png",
        },
        {
          title : "Git",
          logo : "Logos/Git_icon.svg.png",
        },
      ]
    },

    {
      title : "RestFood and Bakery",
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

}
