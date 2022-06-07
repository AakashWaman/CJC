import { Component, OnInit } from '@angular/core';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private comservice:CommonService) { }
  companylist:Companyregistration[];
  ngOnInit(): void {
    
    this.comservice.topendingcompany().subscribe( data =>{
      this.companylist=data;
    })
  }

}
