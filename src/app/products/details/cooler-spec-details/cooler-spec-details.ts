import {Component, input} from '@angular/core';
import type {Cooler} from '../../../../models/product/Cooler';

@Component({
  selector: 'app-cooler-spec-details',
  imports: [],
  templateUrl: './cooler-spec-details.html',
  styleUrl: './cooler-spec-details.css'
})
export class CoolerSpecDetails {
  product = input.required<Cooler>();
}
