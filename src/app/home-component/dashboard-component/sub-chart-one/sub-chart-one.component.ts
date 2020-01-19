import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-chart-one',
  templateUrl: './sub-chart-one.component.html',
  styleUrls: ['./sub-chart-one.component.scss']
})
export class SubChartOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {    
     is3D:true
  };
  width = 1000;
  height = 800;
}
