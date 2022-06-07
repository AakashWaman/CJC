import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(public rout:ActivatedRoute,public comm:CommonService,private router:Router) { }
  enq:Enquiry[];
  ngOnInit(): void {
    this.comm.getEnquirydata().subscribe((data:Enquiry[])=>
    {
      this.enq=data;
    })
  }
  toregistercompany(){
    this.router.navigate(['role','re','viewenquiry','register-company']);
  }
  todelete(eid:number){
    this.comm.delenquiry(eid).subscribe();
    window.location.reload();
  }

}
