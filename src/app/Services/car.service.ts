import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDocs, onSnapshot, query, updateDoc, where } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Car } from '../Models/car'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private fs : Firestore) { }

  getCars():Observable<Car[]>{
    const myCollection : any = collection(this.fs, 'cars');
    return collectionData(myCollection);
  }

  addCar(car : Car){
    const myCollection = collection(this.fs, 'cars');
    addDoc(myCollection, car);
  }

  async deleteCar(car: Car) {
    const myCollection = collection(this.fs, 'cars');
    const querySnapshot = await getDocs(myCollection);
  
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (
        docData['Brand'] === car.Brand &&
        docData['Model'] === car.Model &&
        docData['YearOfReg'] === car.YearOfReg &&
        docData['Kilometers'] === car.Kilometers &&
        docData['Price'] === car.Price
      ) {
        deleteDoc(doc.ref);
      }
    });
  }
  

  updateCar(car: Car) {
    
  }
  
}
