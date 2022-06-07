import { Location } from '@angular/common';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-verifydocument',
  templateUrl: './verifydocument.component.html',
  styleUrls: ['./verifydocument.component.css']
})
export class VerifydocumentComponent implements OnInit {

  constructor(private loc:Location,private actrout:ActivatedRoute,private com:CommonService) { }
 d:Document;
 did:number;
  ngOnInit(): void {
    let empid=this.actrout.snapshot.paramMap.get('cid');
    console.log(empid);
      let id = parseInt(empid);
      this.did=id;
    this.com.todocument(id).subscribe( data =>{
      this.d = data;
      console.log(this.d);
    })
  }
  toapprove(status:string){
 this.com.toverify(this.did,status).subscribe();
  }
  toreject(status:string){
    this.com.toverify(this.did,status).subscribe();
  }
}
