import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
//Cambiar ɵɵdefineInjectable por defineInjectable en ./node_modules/ng2-charts/fesm5/ng2-charts.js
//https://valor-software.com/ng2-charts/#GeneralInfo

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() ChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() ChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  @Input() ChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
