import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit,OnInit{

  hidden : boolean = false;

  toggleHidden() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {
    AOS.init();
  }
  
  ngAfterViewInit(): void {
    AOS.refresh();
  }
}
