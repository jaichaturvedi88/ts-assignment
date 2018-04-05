import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { DetailComponent } from './detail/detail.component';

import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'detail',      component: DetailComponent },
  { path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  }
];  

@NgModule({
  declarations: [
    
    AppComponent,
    NewsComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
