import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule, MatIconModule, MatToolbarModule, MatCheckboxModule, MatSidenavModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatRadioModule} from '@angular/material';
import { DashboardComponentComponent } from './home-component/dashboard-component/dashboard-component.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponentComponent } from './home-component/sidebar-component/sidebar-component.component';
import { FormsModule } from '@angular/forms';
import { AddExpenseComponentComponent } from './home-component/add-expense-component/add-expense-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MainChartComponent } from './home-component/dashboard-component/main-chart/main-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SubChartOneComponent } from './home-component/dashboard-component/sub-chart-one/sub-chart-one.component';
import { LoginComponent } from './login/login.component';
import { Constant } from 'src/Models/Constant/Constant';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    SidebarComponentComponent,
    AddExpenseComponentComponent,
    MainChartComponent,
    SubChartOneComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,MatMenuModule,MatIconModule,   MatDatepickerModule,
    MatNativeDateModule ,MatInputModule,  MatFormFieldModule,
    GoogleChartsModule.forRoot(),MatRadioModule,MatToolbarModule,MatDatepickerModule,MatSidenavModule, MatGridListModule, MatCardModule, MatButtonModule, LayoutModule,MatCheckboxModule
  ],
  providers: [MatDatepickerModule,Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
