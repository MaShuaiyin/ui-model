import { Component } from '@angular/core';
import { scaleLinear } from 'd3-scale';

@Component({
  selector: 'app-d3-gauge',
  templateUrl: './d3-gauge.component.html',
  styleUrls: ['./d3-gauge.component.scss'],
})
export class D3GaugeComponent {
  private scale = scaleLinear().domain([0, 100]).range([-135, 135]);

  value = 30;

  get rotateAngle(): number {
    return this.scale(this.value);
  }
}
