import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private router:Router) { }
  username: string='';
  password:string='';
  ngOnInit(): void {
  }
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
    if (u.username === 're' && u.password === 're') {
      console.log('in admin');
      sessionStorage.setItem('role', 're');
      this.router.navigateByUrl("role/re/new-enquiry");  
    }
    if (u.username === 'oe' && u.password === 'oe') {
      console.log('in admin');
      sessionStorage.setItem('role', 'oe');
      this.router.navigateByUrl("role/oe/all-enquiries");  
    }
    if (u.username === 'cr' && u.password === 'cr') {
      console.log('in admin');
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr/customer-list");  
    }
    if (u.username === 'ah' && u.password === 'ah') {
      console.log('in admin');
      sessionStorage.setItem('role', 'ah');
      this.router.navigateByUrl("role/ah/loanaaplications");  
    }
  }
}
