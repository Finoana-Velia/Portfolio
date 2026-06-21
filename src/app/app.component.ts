import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    //RouterOutlet,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

   constructor(private translate: TranslateService) {
    this.translate.setFallbackLang('fr');
    this.translate.use(localStorage.getItem('lang') ?? 'fr');
  }
}
