import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './home/search/search.component';
import { FilmspopularComponent } from './home/filmspopular/filmspopular.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchService } from "./Services/search.service";
import {HttpClientModule} from "@angular/common/http";
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    FilmspopularComponent,
    SearchResultComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
