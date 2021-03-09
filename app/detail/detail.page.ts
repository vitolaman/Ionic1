import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data = {
    judul : "",
    tanggal : "",
    isi : "",
    index : 0
  }
  noteid : number;
  constructor(private route: ActivatedRoute,private globalvar: GlobalvarService) {
    let id = this.route.snapshot.paramMap.get('id');
    this.noteid = +id;
    this.data = globalvar.getDet(this.noteid);
   }


  ngOnInit() {
  }
  FAV(index) {
    console.log(index);
    this.globalvar.setFav(index);
  }
}
