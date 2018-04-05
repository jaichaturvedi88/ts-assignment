import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  url = 'https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a5b4ef08d5894312b50efe7bd28e64f7';


  constructor(private http: Http) { }

  getNews = (searchQuery?:string, page: number = 0) => {
    let search = '';
    //console.log('getnews');
    if (searchQuery)
      search = `&q=${searchQuery}`
    if (page)
      search += `&page=${page}`
    console.log(this.url + search);
    return this.http.get(this.url + search)
          .catch(function (err: Response) {
            console.log('Fetch Error :-S', err.json());
            return Observable.throw(err.json())
          });
  }
}
