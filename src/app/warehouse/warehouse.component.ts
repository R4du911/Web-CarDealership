import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { CarService } from '../Services/car.service';
import { Car } from '../Models/car'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})

export class WarehouseComponent implements OnInit{

  carsFromDB : Car[] = [];

  newBrand : String = '';
  newModel : String = '';
  newYearOfReg : number = 0;
  newKilometers : number = 0;
  newPrice : number = 0;

  dataSource = new MatTableDataSource<Car>(this.carsFromDB);
  carSavedToDelete : Car = new Car;
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private carService : CarService, private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
      this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(result=>{
        this.dataSource.data = result;
      }
    )
  }

  addCar(){
    let newCar = {Brand: this.newBrand, Model: this.newModel, YearOfReg: this.newYearOfReg, Kilometers: this.newKilometers, Price: this.newPrice};
    this.carService.addCar(newCar);

    this.newBrand = '';
    this.newModel = '';
    this.newYearOfReg = 0;
    this.newKilometers = 0;
    this.newPrice = 0;

    this.closeAddModal();
  }


  deleteCar(car : Car){
    this.carService.deleteCar(car);
  }


  updateCar(carToDel : Car){
    this.addCar();
    this.deleteCar(carToDel);

    this.newBrand = '';
    this.newModel = '';
    this.newYearOfReg = 0;
    this.newKilometers = 0;
    this.newPrice = 0;

    this.closeUpdateModal();
  }

  openAddModal(){
    document.getElementById("AddModal")!.style.display = "block";
  }

  closeAddModal(){
    document.getElementById("AddModal")!.style.display = "none";
  }

  openUpdateModal(car : Car){
    this.carSavedToDelete = car;
    this.newBrand = car.Brand;
    this.newModel = car.Model;
    this.newYearOfReg = car.YearOfReg;
    this.newKilometers = car.Kilometers;
    this.newPrice = car.Price;

    document.getElementById("UpdateModal")!.style.display = "block";
  }

  closeUpdateModal(){
    document.getElementById("UpdateModal")!.style.display = "none";
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

