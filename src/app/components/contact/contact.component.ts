import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements AfterViewInit,OnInit{


  mail = "veliafinoanapatrick@gmail.com";

  ngOnInit(): void {
    AOS.init();
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }
}
