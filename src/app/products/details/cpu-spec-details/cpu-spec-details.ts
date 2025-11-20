import {Component, input} from '@angular/core';
import type {Cpu} from '../../../../models/product/Cpu';

@Component({
  selector: 'app-cpu-spec-details',
  imports: [],
  templateUrl: './cpu-spec-details.html',
  styleUrl: './cpu-spec-details.css'
})
export class CpuSpecDetails {
  product = input.required<Cpu>();
}
