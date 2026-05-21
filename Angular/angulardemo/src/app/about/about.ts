import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Home],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {

  title = 'About Component';

  x = 10;

  changeValue() {
    this.x = 20;
  }

  changeValueAgain() {
    this.x = 30;
  }

}