import { Component, OnInit } from '@angular/core';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-loanapplications',
  templateUrl: './loanapplications.component.html',
  styleUrls: ['./loanapplications.component.css']
})
export class LoanapplicationsComponent implements OnInit {

  constructor(private service:CommonService) { }
 companyarray:Companyregistration[];
  ngOnInit(): void {
    this.service.togetallapprovedcompanies().subscribe( data =>{
      this.companyarray=data;
    })
  }
  transferloan(c:Companyregistration){
    alert("The Loan amount of "+c.sanction.loanamount+" has transfer to "+c.companyname);
  }
}
