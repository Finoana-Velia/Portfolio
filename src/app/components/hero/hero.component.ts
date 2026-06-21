import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    NavigationComponent,
    TranslatePipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
