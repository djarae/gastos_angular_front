import { Component } from '@angular/core';
import {Registro} from '../../models/registro'

@Component({
  selector: 'app-gastos-main',
  templateUrl: './gastos-main.component.html',
  styleUrls: ['./gastos-main.component.css']
})
export class GastosMainComponent {
  Registros = new Array<Registro>; 
  async ngOnInit() {
    const response = await fetch('http://127.0.0.1:8080/registros/get');
    this.Registros=await response.json();
  }
}
