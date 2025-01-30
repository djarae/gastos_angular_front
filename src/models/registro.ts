export class Registro{
    id: number;
    nombre : string;
    monto : number;
    estado: number;

    constructor(id :number, nombre: string,monto: number,estado: number)  {
        this.id = id;
        this.nombre = nombre; 
        this.monto= monto;
        this.estado= estado;
       }
}