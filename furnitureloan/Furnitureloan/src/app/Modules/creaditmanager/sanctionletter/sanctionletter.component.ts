import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sanctionletter',
  templateUrl: './sanctionletter.component.html',
  styleUrls: ['./sanctionletter.component.css']
})
export class SanctionletterComponent implements OnInit {

  constructor(private fb:FormBuilder,private common:CommonService,private location:Location) { }
  sanctionForm:FormGroup;
  reg:any;
  comreg:Companyregistration;
  ngOnInit(): void {
    this.sanctionForm=this.fb.group({
      compname:['',[Validators.required]],
      loanamount:['',[Validators.required]],
      tenure:['',[Validators.required]],
      intrest:['',[Validators.required]],
      intrestamount:['',[Validators.required]],
      emi:['',[Validators.required]]
    })
    this.getCompanyData();
  }
  getCompanyData()
  {
    var com = this.location.getState();
    this.reg =com;
    this.comreg = this.reg;
    this.sanctionForm.get('compname').setValue(this.comreg.companyname);
      this.sanctionForm.get('loanamount').setValue(this.comreg.required_loan);
      this.sanctionForm.get('tenure').setValue(this.comreg.tenure);
      this.sanctionForm.get('intrest').setValue(this.comreg.interestrate);
    
       let intrest=this.comreg.required_loan*(this.comreg.interestrate/100);
       let intrestamount=intrest*this.comreg.tenure;
       console.log("amount: "+intrestamount);
      this.sanctionForm.get('intrestamount').setValue(intrestamount);

      let emi=(intrestamount+this.comreg.required_loan)/(this.comreg.tenure*12);
      this.sanctionForm.get('emi').setValue(emi);
    
  }
  onSubmitSanction(){
    if (this.sanctionForm.valid) {
      this.common.postSanction(this.sanctionForm.value,this.comreg.company_id).subscribe();
      alert("success sanction")
    }else{
      alert("Field's cannot be empty")
    }
  }
  generatepdf(){
    var element = document.getElementById('sanctionpdf');
    html2canvas(element).then((canvas) =>{
      console.log(canvas);
      var imagedata = canvas.toDataURL('image/pdf');
      var imageheight = canvas.height * 208 / canvas.width;
      var doc = new jsPDF;
      doc.addImage(imagedata,0,0,208,imageheight);
      doc.save();
    })
  }

  
}
