import { Component, OnInit } from '@angular/core';
import { Companyregistration } from '../Model/companyregistration';
import { CommonService } from '../Shared/common.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private comservice:CommonService) { }
companyarray:Companyregistration[];
  ngOnInit(): void {
    this.comservice.togetallapprovedcompanies().subscribe( data =>{
      this.companyarray = data
    })
  }

}
