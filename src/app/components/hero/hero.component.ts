import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-hero',
  imports: [
    NavigationComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
