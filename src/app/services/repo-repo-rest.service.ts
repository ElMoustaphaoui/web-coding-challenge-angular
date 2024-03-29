import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repositories/models/repository.model';


@Injectable({
  providedIn: 'root'
})
export class RepoRestService {
  //To get the most starred Github repos created in the last 30 days (relative to 2017-11-22)
  url = environment.githubRestUrl;
  lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0];

  constructor(private http: HttpClient) { }

  // i had limited the row to 10 per page
  //get the date from github rest api for the first time
  getreposInit() {


    return this.http.get<Repository[]>(`${this.url}` + `?q=created:>` + `${this.lastMonth}` + `&sort=stars&order=desc&per_page=10` + `&page=` + `${1}`);


  }
  //get date for specifique page
  getreposPage(page: number) {
    return this.http.get<Repository[]>(`${this.url}` + `?q=created:>` + `${this.lastMonth}` + `&sort=stars&order=desc&per_page=10` + `&page=` + `${page}`);
  }

}

