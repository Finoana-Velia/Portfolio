import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit, AfterViewInit{

  ngAfterViewInit(): void {
    AOS.refresh();
  }
  ngOnInit(): void {
    AOS.init();
  }

}
