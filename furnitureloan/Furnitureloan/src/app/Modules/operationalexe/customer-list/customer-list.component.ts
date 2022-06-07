import { Component, OnInit } from '@angular/core';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private com:CommonService) { }
companyarray:Companyregistration[];
  ngOnInit(): void {
    this.com.toallcompany().subscribe(data =>{
      this.companyarray=data;
    })
  }

}
