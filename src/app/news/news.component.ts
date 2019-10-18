import { DetailComponent } from './../detail/detail.component';
import { element } from 'protractor';
import { DataService } from './../data.service';
import { Component, OnInit, Input, NgModule, OnDestroy } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef;
  req: Subscription
  recentNews;
  page: number;
  searchQuery: string = '';


  totalItems: number = 0;
  maxSize: number = 5;
  showBoundaryLinks = true;

  currentPage: number;
  itemsPerPage: number;
  
  
  constructor(private service: DataService,
    private modalService: BsModalService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {
    // this.req = this.service.getNews(this.searchQuery)
    //   .subscribe(res => {
    //     this.recentNews = res.json().response.docs;
    //   })

    this.req = this.fetchNews();
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  getNews = (event) => {
    if (this.searchQuery){
      this.req = this.fetchNews();
    }    
  }

  openModalWithComponent(event: MouseEvent, newsItem) {
    const initialState = {
      title: newsItem.headline.main,
      newsDetails: newsItem
    };
    this.bsModalRef = this.modalService.show(DetailComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
    event.stopPropagation();
  }

  pageChanged(event: any): void {
    this.page = event.page - 1;
    this.req = this.fetchNews();
  }

  fetchNews(): Subscription{
    this.spinnerService.show();
    return this.service.getNews(this.searchQuery, this.page)
    .subscribe(res => {
      let result = res.json().response;
      this.recentNews = result.docs;
      this.totalItems = 200 //result.meta.hits; // hardcoded to 200 as this is the limit set by NYTimes for developer api key
      this.page = result.meta.offset + 1;

      this.spinnerService.hide();

      // console.log(this.recentNews);
      // this.recentNews.forEach(element => {
        // console.log(element.multimedia.length);
      // });
  })
  }

}
