import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Constant } from 'src/Models/Constant/Constant';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  close() {
    this.sidenav.close();
  }
  openSiddeNav(){
    this.sidenav.open();
  }
  constructor(public constant:Constant) { }

  ngOnInit() {
  }

}
