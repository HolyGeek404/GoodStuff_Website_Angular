import { Component } from '@angular/core';
import {Navmenu} from '../navmenu/navmenu';

@Component({
  selector: 'app-nav',
  imports: [
    Navmenu
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
