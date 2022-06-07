import { Component, OnInit } from '@angular/core';
import { Enquiry } from 'src/app/Model/enquiry';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-all-enquiries',
  templateUrl: './all-enquiries.component.html',
  styleUrls: ['./all-enquiries.component.css']
})
export class AllEnquiriesComponent implements OnInit {
  enquirylist:Enquiry[];
  statusbutton:string;
  hidebtn:boolean;
  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.service.getEnquirydata().subscribe((data:any)=>this.enquirylist=data);
    this.hidebtn=false;
  }
  generateCIBIL(e:Enquiry){
    this.service.getCIBIL().subscribe((data:any)=>{
      let CIBILScore = data;
      console.log(CIBILScore);
      e.cibilscore=CIBILScore;

      if (e.cibilscore<700) {
        this.statusbutton="Reject";
        
        console.log("r");
      } else {
        this.statusbutton="Approve";
        console.log("a");
      }
      this.hidebtn=true;
    this.service.putCibi(e,e.eid).subscribe();
    });
  }

  generatestatus(e:Enquiry){
    console.log(this.statusbutton)
    if (this.statusbutton=="Approve") {
      e.e_status="Approved";
      console.log(e.e_status);
    } else {
      e.e_status="Rejected";
      console.log(e.e_status);
    }
    this.service.putCibi(e,e.eid).subscribe();
  }
}
