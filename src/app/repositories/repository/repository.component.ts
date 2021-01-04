import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  @Input() repo: any;
  descriptionRepo:String;
  nameowner:String;
  constructor( ) {}
  ngOnInit() {
    this.descriptionRepo=this.repo.description;
    //we get data full name lik ownername/namerepo ----> so we need only owner name so we split 
    var str=this.repo.full_name;
    this.nameowner = str.split("/", 1);
  }

}
