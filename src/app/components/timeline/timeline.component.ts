import { NgForOf } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

import * as AOS from 'aos';

interface event {
  date : string,
  department : string,
  diploma : string,
}
@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimelineComponent implements AfterViewInit,OnInit{

  ngOnInit(): void {
    AOS.init();
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }

  events : event[] = [
    {
      date : "Décembre 2024",
      department : "Institut Supérieur Polytechnique de Madagascar (I.S.P.M)",
      diploma : "Master II en Informatique et télécommunication"
    },
    {
      date : "Décembre 2023",
      department : "English Teaching Program",
      diploma : "Advance 1 Certificate English level"
    },
    {
      date : "Decembre 2021",
      department : "Institut Supérieur Polytechnique de Madagascar (I.S.P.M)",
      diploma : "Licence II en Informatique et télécommunication"
    },
    {
      date : "Aout 2020",
      department : "Alliance Française de Tananarive",
      diploma : "Diplôme d'Etude en Langue Française (D.E.L.F) niveau B1"
    },
    {
      date : "Septembre 2017",
      department : "Collège Saint Michel",
      diploma : "Baccalaureat série D"
    }
  ]

}
