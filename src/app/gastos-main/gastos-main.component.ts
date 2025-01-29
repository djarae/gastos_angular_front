import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos-main',
  templateUrl: './gastos-main.component.html',
  styleUrls: ['./gastos-main.component.css']
})
export class GastosMainComponent {
    valor : any;
  body: string=""
  async ngOnInit() {
    console.log("En este instante el componente ha cargado desde ngonit");
    const response = await fetch('http://127.0.0.1:8080/apiGastos/GetListRegistros');
    this.body = await response.json();
    console.log(this.body);
    //Muy importante , importamos el "body" a un "any" para leerlo
    this.valor=this.body;
    console.log(this.valor[0].id);
    console.log(this.valor[0].nombrePersonajeEmisor);
  }

}
