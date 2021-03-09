import { Component } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data = [];
  constructor(private globalvar: GlobalvarService, private router: Router) {
    this.data = globalvar.getNote();
  }
  judul = "";
  tanggal = "";
  isi = "";

  SUBMITNOTE() {
    this.globalvar.setNote(this.judul, this.tanggal, this.isi);
}
FAV(index) {
  console.log(index);
  this.globalvar.setFav(index);
}
TODET(index){
  this.router.navigate(["/detail",index]);
}

TOFAV() {
  this.router.navigate(["/detail"]);
}
}
