import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styles: [ './pagenotfound.component.css']
})
export class PagenotfoundComponent  {

  year = new Date().getFullYear();

}
