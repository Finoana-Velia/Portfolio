import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-experiences',
  imports: [TranslatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit, AfterViewInit{

  experiences : any[] = [];
  
  constructor(private translate : TranslateService) {}

  ngAfterViewInit(): void {
    AOS.refresh();
  }
  ngOnInit(): void {
    AOS.init();
    this.experiences = [
      {
        begin : this.getMounthYear(new Date("2025-09-01")),
        end : this.translate.instant('EN_COURS'),
        title : this.translate.instant('DEV_JAVA'),
        company : "LINKEO",
        description : this.translate.instant('LINKEO'),
        techs : ["Spring boot", "Apache Tapestry", "Mysql / Maria D", "Htmx", "Git", "Bitbicket Pipelines", "Jenkins"]
      },
      {
        begin : this.getMounthYear(new Date("2025-05-01")),
        end : this.getMounthYear(new Date("2025-07-01")),
        title : this.translate.instant('DEV_JAVA'),
        company : "Freelance",
        description : this.translate.instant('FREELENCE'),
        techs : ["Spring boot", "Angular", "PostgreSQL", "Git", "Github actions", "Docker"]
      },
      {
        begin : this.getMounthYear(new Date("2023-08-01")),
        end : this.getMounthYear(new Date("2024-09-01")),
        title : this.translate.instant('DEV_JAVA/ANGULAR'),
        company : "Madagascar Information Technology (MDG-IT)",
        description : this.translate.instant('MDGIT'),
        techs : ["Spring boot", "Angular", "PostgreSQL", "Git", "Bootstrap", "Git"]
      },
      {
        begin : this.getMounthYear(new Date("2023-02-01")),
        end : this.getMounthYear(new Date("2023-08-01")),
        title : this.translate.instant('INTERN_1'),
        company : "Madagascar Information Technology (MDG-IT)",
        description : this.translate.instant('STAGE_1'),
        techs : ["Spring boot", "Angular", "PostgreSQL", "Git"]
      },
      {
        begin : this.getMounthYear(new Date("2025-05-01")),
        end : this.getMounthYear(new Date("2025-07-01")),
        title : this.translate.instant('INTERN_2'),
        company : "Université d'Antananarivo",
        description : this.translate.instant('STAGE_2'),
        techs : ["CodeIngter 3", "HTML 5", "CSS 3", "Javascript", "JQuery", "Mysql", "Git"]
      },
    ]
  }

  getMounthYear(date : Date | string | null | undefined) {
    const locale = localStorage.getItem('lang') ?? 'fr';
    if(!date) {
      return this.translate.instant("EN_COURS");
    }
    return formatDate(date, 'MMM y', locale);
  }

}
