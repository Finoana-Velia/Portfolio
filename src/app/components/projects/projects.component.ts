import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit,AfterViewInit{


  projectSelected : any = null;

  constructor(private translate : TranslateService) {}

  projects : any[] = [];
  

  showTooltip : boolean = false;


  ngOnInit(): void {
    
    this.projects = [
    {
      title : "Gasy Tube",
      background : "Projects/homes/gasytube.png",
      monitor : "Projects/details/gasytube-web-mobile.png",
      //description : "It is an application allowing you to consult a film catalog from your smartphone with the title and the actors who participate in it. All the data is managed by a web interface to carry out CRUD actions.",
      description : this.translate.instant('GASY_TUBE'),
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
    {
      title : "RestFood and Bakery",
      background : "Projects/homes/restfood&bakery.png",
      monitor : "Projects/details/bakery-web-mobile.png",
      //description : "RestFood & Bakery is a restaurant application that allows users to place orders online according to their choice from the menu, a menu that is managed from a secure administrator space. RestFood also has a mobile part currently under development that allows ordinary users to use their smartphone as a support whether on Android or IOS.",
      description : this.translate.instant('REST_FOOD'),
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
        {
          title : "Docker",
          logo : "Logos/free-docker-logo-icon.png",
        },
      ],
      repos : "https://github.com/Finoana-Velia/Recipe.git"
    },
    {
      title : "Book Connect",
      background : "Projects/details/book-connect.png",
      monitor : "Projects/details/book-connect.png",
      description : this.translate.instant('BOOK'),
      url : "",
      technologies: [
        {
          title : "React Native",
          logo : "Logos/reactnative-inner.svg",
        },
        {
          title : "Tailwind css",
          logo : "Logos/tailwind-css-logo.png",
        },
        {
          title : "Git",
          logo : "Logos/Git_icon.svg.png",
        },
      ],
      repos : "https://github.com/Finoana-Velia/books",
    },
  ];
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
