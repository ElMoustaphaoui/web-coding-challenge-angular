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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    RepositoryComponent,
    RepositoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
