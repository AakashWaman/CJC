
import { Component, OnInit } from '@angular/core';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-allcompanies',
  templateUrl: './allcompanies.component.html',
  styleUrls: ['./allcompanies.component.css']
})
export class AllcompaniesComponent implements OnInit {

  constructor(private service:CommonService) { }
  companyarray:Companyregistration[];
  ngOnInit(): void {
    this.service.toallcompany().subscribe(data =>{
      this.companyarray = data;
    })
  }
  sanctionlettermail(company:Companyregistration){
    this.service.mailletter(company).subscribe();
  }
}
