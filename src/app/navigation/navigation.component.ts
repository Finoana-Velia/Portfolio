import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService , TranslatePipe} from '@ngx-translate/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-navigation',
  imports: [TranslatePipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements AfterViewInit,OnInit{

  constructor(private translate: TranslateService) {
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem("lang", lang);
  }


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
