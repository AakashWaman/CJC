import { Location } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { CommonService } from 'src/app/Shared/common.service';


@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {

  step:any=1;

  constructor(private fb:FormBuilder , private common:CommonService,private router:Router,private _location:Location) { }
  registercustomer:FormGroup;
  enq:any;
  enquiry:Enquiry;
  ngOnInit(): void {
    this.registercustomer=this.fb.group({
      company_id:[''],
      companyname:['',Validators.required],
      company_email:['',Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")],
      company_mobile:['',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      company_shopactno:['',Validators.required],
      company_startdate:['',Validators.required],
      company_gst:['',Validators.required],
      company_partnerno:['',Validators.required],
      company_pan:['',Validators.required],
      required_loan:['',Validators.required],
      tenure:['',Validators.required],
      interestrate:['',Validators.required],
      address:this.fb.group({
        a_id:[''],
        a_field1:['',Validators.required],
        a_field2:['',Validators.required],
        landmark:['',Validators.required],
        pincode:['',Validators.required],
        taluka:['',Validators.required],
        district:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required],

      }),
      gurantor:this.fb.group({
        g_Id:[''],
        g_name:['',Validators.required],
        g_relation:['',Validators.required],
        g_mobileno:['',Validators.required],
        g_aadhar:['',Validators.required],
        g_pan:['',Validators.required],
        g_address:this.fb.group({
          a_id:[''],
          a_field1:['',Validators.required],
          a_field2:['',Validators.required],
          landmark:['',Validators.required],
          pincode:['',Validators.required],
          taluka:['',Validators.required],
          district:['',Validators.required],
          state:['',Validators.required],
          country:['',Validators.required],
  
        }),
        g_occupation:['',Validators.required],
       
      }),
      accountdetail:this.fb.group({
        acc_id:[''],
        acc_bankname:['',Validators.required],
        acc_number:['',Validators.required],
        acc_type:['',Validators.required],
        acc_bal:['',Validators.required],
        acc_holdername:['',Validators.required],
        acc_status:['',Validators.required],
      }),
      preloan:this.fb.group({
        p_Id:[''],
        p_Loanbank:['',Validators.required],
        p_loandate:['',Validators.required],
        p_loanamount:['',Validators.required],
        p_loantenure:['',Validators.required],
        p_loantype:['',Validators.required],
        p_loanlastpaid:['',Validators.required],
      })
    })
    this.toaddenquirydata();
  }
  toaddenquirydata(){
  var enqui = this._location.getState();
 console.log(enqui);
    this.enq = enqui;
    this.enquiry = this.enq;
    if(this.enquiry!=null){
      this.registercustomer.get('companyname').setValue(this.enquiry.e_name);
      this.registercustomer.get('company_mobile').setValue(this.enquiry.e_mobile);
      this.registercustomer.get('company_email').setValue(this.enquiry.e_email);
      this.registercustomer.get('company_pan').setValue(this.enquiry.e_pan);
      this.registercustomer.get('required_loan').setValue(this.enquiry.required_loan);
    }
  }
  onSubmit()
  {
    if(this.registercustomer.valid){
      this.common.saveCompanyData(this.registercustomer.value).subscribe();
      this._location.back();
    }else{
      alert("fiels cannot be empty");
    }
    
    // console.log(this.productRegister.get('productName').value);
    
    // this.router.navigate(['list']);
    this._location.back();
  }

  onnext(){
    this.step=this.step+1;
  }
  onprevious(){
    this.step=this.step-1;
    
  }
}
