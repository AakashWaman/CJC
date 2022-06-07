import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Companyregistration } from 'src/app/Model/companyregistration';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  ename:string;
  companyarray:Companyregistration[];
  id:number;
  constructor(private service:CommonService,private actout:ActivatedRoute) { }
  selectphoto:any;
  selectaadhar:any;
  selectpan:any;
  selectaddr:any;
  selectbankstm:any;
  selectitr:any;
  selectcheck:any;
  selectsign:any;
  selectqout:any;
  ngOnInit(): void {
    let empid=this.actout.snapshot.paramMap.get('ename');
      // console.log(empid);
      this.ename= empid;
      console.log(this.ename);
      this.service.togetcompanyid(this.ename).subscribe(data =>{
        this.id = data;
      })
  }
 
  onselectedFile1(event:any){this.selectphoto=event.target.files[0]}
  onselectedFile2(event:any){this.selectaadhar=event.target.files[0];}
  onselectedFile3(event:any){this.selectpan=event.target.files[0];}
  onselectedFile4(event:any){this.selectaddr=event.target.files[0];}
  onselectedFile5(event:any){this.selectbankstm=event.target.files[0];}
  onselectedFile6(event:any){this.selectitr=event.target.files[0];}
  onselectedFile7(event:any){this.selectcheck=event.target.files[0];}
  onselectedFile8(event:any){this.selectsign=event.target.files[0];}
  onselectedFile9(event:any){this.selectqout=event.target.files[0];}
  onupload()
  {
    alert("Document is Uploaded");
    const uploadDocument= new FormData();
    uploadDocument.append("photo",this.selectphoto);
    uploadDocument.append("aadharcard",this.selectaadhar);
    uploadDocument.append("pancard",this.selectpan);
    uploadDocument.append("addressproof",this.selectaddr);
    uploadDocument.append("bankstatement",this.selectbankstm);
    uploadDocument.append("itr",this.selectitr);
    uploadDocument.append("pdccheck",this.selectcheck);
    uploadDocument.append("signature",this.selectsign);
    uploadDocument.append("quotation",this.selectqout);
    this.service.togetcompanyid(this.ename).subscribe(data =>{
      let id = data;
      console.log(id);
      this.service.putDocument(uploadDocument,id).subscribe();
    })
    
  }
}
