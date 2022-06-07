import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Companyregistration } from '../Model/companyregistration';
import { CommonService } from '../Shared/common.service';

@Component({
  selector: 'app-payemi',
  templateUrl: './payemi.component.html',
  styleUrls: ['./payemi.component.css']
})
export class PayemiComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:CommonService,private rout:ActivatedRoute,private loc:Location) { }
  ledgerForm:FormGroup;
  count:number=0;
  companyid:number;
  c:any;
  company:Companyregistration;
  ngOnInit(): void {
    let empid=this.rout.snapshot.paramMap.get('id');
    console.log(empid);
      let id = parseInt(empid);
      this.companyid=id;
    this.ledgerForm=this.fb.group({
      compname:['',[Validators.required]],
      totalloan:['',[Validators.required]],
      duration:['',[Validators.required]],
      monthspaid:['',[Validators.required]],
      emi:['',[Validators.required]],
      loanpaid:['',Validators.required],
      loanremaining:['',Validators.required]
    })
    this.getdata();
  }
  getdata(){
    console.log("inside getCompanyData()");
      let comp=this.loc.getState();
      this.c=comp;
      this.company = this.c
      this.ledgerForm.get('compname').setValue(this.company.companyname);
      this.ledgerForm.get('totalloan').setValue(this.company.sanction.loanamount+this.company.sanction.intrestamount); //set (company.sanction.intrestamount+company.required_loan)
      this.ledgerForm.get('duration').setValue(this.company.tenure*12);
      
      console.log("aaa"+this.company.sanction.emi);
      this.ledgerForm.get('emi').setValue(this.company.sanction.emi); 
      this.ledgerForm.get('monthspaid').setValue(this.company.ledger.monthspaid);
      this.ledgerForm.get('loanpaid').setValue(this.company.ledger.loanpaid);
      this.ledgerForm.get('loanremaining').setValue(this.company.ledger.loanremaining)
  }
  
  onSubmitSanction(){
    this.count=this.count+1;
    
    this.ledgerForm.get('monthspaid').setValue(this.ledgerForm.value.monthspaid+this.count);
    alert("EMI paid successfully!")
    this.service.putledger(this.ledgerForm.value,this.companyid).subscribe();
    window.location.href="home";
    
  }
}
