import {Component, input, Input, signal} from '@angular/core';
import type {BaseProduct} from '../../../../models/product/BaseProduct';
import {ProductTypes} from '../../../../models/product/ProductTypes';
import {GpuSpecDetails} from '../gpu-spec-details/gpu-spec-details';
import {CpuSpecDetails} from '../cpu-spec-details/cpu-spec-details';
import {CoolerSpecDetails} from '../cooler-spec-details/cooler-spec-details';

@Component({
  selector: 'app-product-card-details',
  imports: [
    GpuSpecDetails,
    CpuSpecDetails,
    CoolerSpecDetails
  ],
  templateUrl: './product-card-details.component.html',
  styleUrl: './product-card-details.component.css'
})
export class ProductCardDetails {
  product = input.required<BaseProduct>();
  category = input.required<ProductTypes>();
  protected readonly ProductTypes = ProductTypes;
}
