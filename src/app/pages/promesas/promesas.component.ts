import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.getUsuarios().then(body=> console.log(body));
    /* const promesa = new Promise( (resolve, reject)=>{
    if(false){
      resolve('No ha ocurrido un error');
    }else{
      reject('Ha ocurrido un error');
    }
    });

    promesa.then(()=>{
      console.log("Termine")
    }).catch(error => console.log(error));

    console.log("Fin del Init"); */

  }

  getUsuarios(){
    return new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    })
  }
  
  
}
