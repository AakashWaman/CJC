import { Location } from '@angular/common';
import { Component, ElementRef, OnInit,Renderer2,ViewChild } from '@angular/core';
import { Router, } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild("navbar-cmp", {static: false}) button;
  constructor(location:Location, private renderer : Renderer2, private element : ElementRef, private router: Router) {
   ;
   }

  ngOnInit(): void {
  
  }
} 

