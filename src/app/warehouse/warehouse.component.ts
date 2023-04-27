import { Component, OnInit, ViewChild} from '@angular/core';
import { CarService } from '../Services/car.service';
import { Car } from '../Models/car'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})

export class WarehouseComponent implements OnInit{
  
  inputValue: string = '';
  carsFromDB : Car[] = [];

  newBrand : String = '';
  newModel : String = '';
  newYearOfReg : number = 0;
  newKilometers : number = 0;
  newPrice : number = 0;

  constructor(private carService : CarService) {}

  dataSource = new MatTableDataSource<Car>(this.carsFromDB);

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }

  ngOnInit(): void {
      this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(result=>{
        this.carsFromDB = result;
      }
    )
  }

  addCar(){
    let newCar = {Brand: this.newBrand, Model: this.newModel, YearOfReg: this.newYearOfReg, Kilometers: this.newKilometers, Price: this.newPrice};
    this.carService.addCar(newCar);
  }

  deleteCar(car : Car){
    this.carService.deleteCar(car);
  }

  openModal(){
    document.getElementById("myModal")!.style.display = "block";
  }

  closeModal(){
    document.getElementById("myModal")!.style.display = "none";
  }
}

