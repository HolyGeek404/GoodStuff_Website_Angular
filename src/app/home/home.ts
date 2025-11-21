import { Component } from '@angular/core';
import {ProductTypes} from '../../models/product/ProductTypes';
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
  categories = Object.values(ProductTypes);
}
