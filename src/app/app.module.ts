import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/main/main.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RepositoryComponent } from './repositories/repository/repository.component';
import { RepositoriesListComponent } from './repositories/repositories-list/repositories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadMoreComponent} from '../app/core/read-more/read-more.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    RepositoryComponent,
    RepositoriesListComponent,
    ReadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
