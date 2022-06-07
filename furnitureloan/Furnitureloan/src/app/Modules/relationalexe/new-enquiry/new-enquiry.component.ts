import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrls: ['./new-enquiry.component.css']
})
export class NewEnquiryComponent implements OnInit {
  enqform:FormGroup;
  constructor(public comm:CommonService,public form:FormBuilder) { }

  ngOnInit(): void {
    this.enqform=this.form.group(
      {
        eid:[''],
        e_name:['',Validators.required],
        e_mobile:['',Validators.required],
        e_email:['',Validators.required],
        e_pan:['',Validators.required],
        e_status:[''],
        cibilscore:[''],
        required_loan:['',Validators.required]
      }
    )
  }

  submitdata()
   {
     if(this.enqform.valid)
     {
    this.comm.toaddEnquiry(this.enqform.value).subscribe();
    window.location.reload();
    alert("Enquiry Has Been Registred");
   }
   else
   {
    alert("please fill all fields");
   }
  }
}
