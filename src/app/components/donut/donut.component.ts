import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent  {

  @Input() titulo: String = "Sin titulo";
  @Input("labels") doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input("data") doughnutChartData: MultiDataSet = [
    [350, 450, 200],
  ];
  public colors: Color[]= [
    {
      backgroundColor: [ '#9E120E',  '#FF5800', '#FFB414'],
    }
  ]

}
