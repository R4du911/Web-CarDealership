export class Car {
    Id?:string;
    Brand:String;
    Model:String;
    YearOfReg:number;
    Kilometers:number;
    Price:number;

    constructor(){
        this.Brand="";
        this.Model="";
        this.YearOfReg = 0;
        this.Kilometers = 0;
        this.Price = 0;
    }
}