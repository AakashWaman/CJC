import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEnquiryComponent } from './new-enquiry/new-enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { RegisterCompanyComponent } from './register-company/register-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

const reroutes:Routes=[
  {path:'new-enquiry',component:NewEnquiryComponent},
  {path:'viewenquiry',component:ViewEnquiryComponent,
  children:[
    {
      path:'register-company',component:RegisterCompanyComponent
    },
    {
      path:'upload-document/:ename',component:UploadDocumentComponent
    }
  ]
}
]

@NgModule({
  declarations: [
    NewEnquiryComponent,
    ViewEnquiryComponent,
    RegisterCompanyComponent,
    UploadDocumentComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(reroutes),ReactiveFormsModule,FormsModule
  ]
})
export class RelationalexeModule { }
