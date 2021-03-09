import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.page.html',
  styleUrls: ['./fav.page.scss'],
})
export class FavPage implements OnInit {
  data = {
    judul : "",
    tanggal : "",
    isi : "",
    index : 0
  }
  constructor(private globalvar: GlobalvarService) {
    this.data = globalvar.getFav();
   }

  ngOnInit() {
  }

}
