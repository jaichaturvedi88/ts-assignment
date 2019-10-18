import { BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  newsDetails;
  title: string;
  closeBtnName: string;
  list: any[] = [];

  source;
  pub_date;
  snippet;
  url;

  constructor(private route: ActivatedRoute, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
