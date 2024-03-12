import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {DetailMediaComponent} from "./detail-media/detail-media.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'search-result/:type/:search/:nbPage', component: SearchResultComponent},
  {path: 'detail-media/:type/:idMedia', component: DetailMediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
