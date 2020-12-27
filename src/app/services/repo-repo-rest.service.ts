import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepoRestService {
  //To get the most starred Github repos created in the last 30 days (relative to 2017-11-22)
  url = environment.githubRestUrl;
  handleError: any;

  constructor(private http: HttpClient) { }

  // i had limited the row to 10 per page
  //get the date from github rest api for the first time
  getreposInit() {
    return this.http.get(`${this.url}`+`&pag=`+`${1}`);
  }
  //get date for specifique page
  getreposPage(page:number) {
    return this.http.get(`${this.url}`+`&pag=`+`${page}`);
  }

}

