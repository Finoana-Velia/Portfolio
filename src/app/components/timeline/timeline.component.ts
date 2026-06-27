import { formatDate, NgForOf, NgClass } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import * as AOS from 'aos';

interface event {
  date : string,
  department : string,
  abrev : string | null,
  icon : string,
  diploma : string,
}

@Component({
  selector: 'app-timeline',
  imports: [TranslatePipe, NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimelineComponent implements AfterViewInit,OnInit{

  events : event[] = [];

  ngOnInit(): void {
    AOS.init();
    this.events = [
      {
        date : this.getMounthYear(new Date('2020-12-01')) + " - " + this.getMounthYear(new Date('2022-09-01')),
        department : "Institut Supérieur Polytechnique de Madagascar",
        abrev : "ISPM",
        icon : "fa-solid fa-graduation-cap",
        diploma : "Master II"
      },
      {
        date : this.getMounthYear(new Date('2021-09-01')) + " - " + this.getMounthYear(new Date('2023-12-01')),
        department : "English Teaching Program",
        abrev : "ETP",
        icon : "fa-solid fa-certificate",
        diploma : "Advance 1 Certificate English"
      },
      {
        date : this.getMounthYear(new Date('2020-08-01')),
        department : "Alliance Française de Tananarive",
        abrev : null,
        icon : "fa-solid fa-graduation-cap",
        diploma : "DELF B1"
      },
      {
        date : this.getMounthYear(new Date('2020-08-01')) + " - " + this.getMounthYear(new Date('2020-01-01')),
        department : "Institut Supérieur Polytechnique de Madagascar",
        abrev : "ISPM",
        icon : "fa-solid fa-graduation-cap",
        diploma : "Licence II"
      },
      {
        date : this.getMounthYear(new Date('2017-09-01')),
        department : "Collège Saint Michel Amparibe",
        abrev : null,
        icon : "fa-solid fa-graduation-cap",
        diploma : "Baccalaureat"
      }
    ];
  }

  ngAfterViewInit(): void {
    AOS.refresh();
  }

  getMounthYear(date: Date | string): string {
    const lang = localStorage.getItem('lang');
    const supportedLocales = ['fr', 'en'];
    const locale = supportedLocales.includes(lang ?? '') ? lang! : 'en';

    return formatDate(date, 'MMM y', locale);
  }

  

}
