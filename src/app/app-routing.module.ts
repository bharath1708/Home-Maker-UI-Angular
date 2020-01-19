import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppComponent } from './app.component';
import { DashboardComponentComponent } from './home-component/dashboard-component/dashboard-component.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:'home',component:HomeComponentComponent},{path:'',component:LoginComponent},{path:'dashboard',component:DashboardComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
