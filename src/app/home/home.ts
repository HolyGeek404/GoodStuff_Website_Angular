import { Component } from '@angular/core';
import {CategoryCard} from '../categories/category-card/category-card';

@Component({
  selector: 'app-home',
  imports: [
    CategoryCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  categories = ["CPU","GPU","RAM","MOBO","PSU","SSD","CASE","COOLER"];
}
