import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {
  private array = [];
  
  counter = 0;
  fav = 0;
  constructor() { 

  }
  public getNote() {
    return this.array;
  }

  public getDet(index) {
    return this.array[index];
  }
  public getFav() {

      return this.array[this.fav];
 
  }
  public setFav(index){
     this.fav = index;
  }
  public setNote(judul, tanggal, isi){
    var item = {
      judul : judul,
      tanggal : tanggal,
      isi : isi,
      index : this.counter
    }
    this.array.push(item);
    this.counter++;
    console.log(this.array);
  }

}
