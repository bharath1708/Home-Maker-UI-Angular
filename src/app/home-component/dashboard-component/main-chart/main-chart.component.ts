import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {

 
title = 'Company Hiring Report';  
  type = 'ComboChart';  
  data = [  
     ["Account", 3, 2, 2.5],  
     ["HR",2, 3, 2.5],  
     ["IT", 1, 5, 3],  
     ["Sales", 3, 9, 6],  
     ["Marketing", 4, 2, 3]  
  ];  
  columnNames = ['Loaction','India','US','Average'];  
  options = {  
     hAxis: {  
        title: 'Department'  
     },  
     vAxis:{  
        title: 'Employee hired'  
     },  
     seriesType: 'bars',  
     series: {2: {type: 'line'}}  
  };  
  width = 600;  
  height = 400;  
  
  ngOnInit() {  
  }  

}
