import { Component, signal } from '@angular/core';
import {Nav} from './nav/nav';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [Nav, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GoodStuffWebsite');
}
