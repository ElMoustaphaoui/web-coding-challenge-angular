import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {RepoRestService } from '../../services/repo-repo-rest.service'

@Component({
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  repositories: Observable<any[] | null>;
  isLoading: boolean;
  number_of_pages:number;
  

  constructor(private repoRestService: RepoRestService) {

    //waiting the api response
    this.isLoading =true;
    //calling the github api 
    this.repoRestService.getreposInit().subscribe((data:any) =>{

          // get the number of pages 
          this.number_of_pages=data.total_count;
          // passing the repo data to UI
          this.repositories=data.items;
          //now once the we get data from api we made loading down
          this.isLoading =false;

    },
    err =>{
          console.log(" erreur while get repos data : " + err);
    })
     
   }

  ngOnInit() {
    
  }

}
