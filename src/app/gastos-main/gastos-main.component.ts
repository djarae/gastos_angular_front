import { Component } from '@angular/core';

@Component({
  selector: 'app-gastos-main',
  templateUrl: './gastos-main.component.html',
  styleUrls: ['./gastos-main.component.css']
})
export class GastosMainComponent {
  dataGastos : any;
  async ngOnInit() {
    const response = await fetch('http://127.0.0.1:8080/registros/get');
    this.dataGastos=await response.json();
  }

}
