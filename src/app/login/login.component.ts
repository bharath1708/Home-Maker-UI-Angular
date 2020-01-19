import { Component, OnInit } from '@angular/core';
import{ Constant} from '../../Models/Constant/Constant'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  username:string;
  password:string;
  invalid=false;
  constructor(public constant:Constant,private router:Router) { }

  ngOnInit() {
  }

  initLogin(){
    if(this.username === 'admin' && this.password === 'admin'){
    this.router.navigate(['home']);
    }
    else{
      this.invalid=true;
    }
  }

}
