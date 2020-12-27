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

  //config magination
  config: any;
  
  constructor(private repoRestService: RepoRestService) {

       this.config = {
          itemsPerPage: 10,
          currentPage: 1,
        
    };
  }

  ngOnInit() {
    this.fetchRepos();   
  }

  pageChanged(event){
    this.isLoading =true; 
    this.config.currentPage = event;
    //get date of next page
    this.fetchReposPage(event);
  }

  fetchReposPage(page:number): void {
    //waiting the api response
    this.isLoading =true;
    //calling the github api 
    this.repoRestService.getreposPage(page).subscribe((data:any) =>{

          // get the number of pages 
          this.config.totalItems=data.total_count;
          // passing the repo data to UI
          this.repositories=data.items;
          //now once the we get data from api we made loading down
          this.isLoading =false;         
    
    },
    err =>{
          console.log(" erreur while get repos data of next page : " + err);
    })
}



  fetchRepos(): void {
        //waiting the api response
        this.isLoading =true;
        //calling the github api 
        this.repoRestService.getreposInit().subscribe((data:any) =>{
    
              // get the number of pages 
              this.config.totalItems=data.total_count;
              // passing the repo data to UI
              this.repositories=data.items;
              //now once the we get data from api we made loading down
              this.isLoading =false;         
        
        },
        err =>{
              console.log(" erreur while get repos data : " + err);
        })
  }
 



}
