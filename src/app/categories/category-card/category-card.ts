import {Component, computed, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {GoodStuffFunctionsService} from '../../../services/GoodStuffFunctionsService';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-category-card',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})
export class CategoryCard {
  category = input.required<string>();
  categoryImgPath = computed(() => {
    return "categories/" + this.category().toLowerCase() + ".svg";
  });
}
