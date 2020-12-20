import { Component} from '@angular/core';
import { MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public titulo: String = "Ventas";
  public titulo1: String = "Ventas1";
  public labels: string[] = ['Prueba1', 'Prueba3', 'Prueba2'];
  public data: MultiDataSet= [
    [500, 100, 100],
  ];
}
