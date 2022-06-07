import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { VerifydocumentComponent } from './verifydocument/verifydocument.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanctionletterComponent } from './sanctionletter/sanctionletter.component';
import { AllcompaniesComponent } from './allcompanies/allcompanies.component';

const crroutes:Routes=[
  {
    path:'customer-list',component:CustomerListComponent,
    children:[
      {
        path:'verify/:cid',component:VerifydocumentComponent
      },
      {
        path:'sanction',component:SanctionletterComponent
      }
    ]
  },
  {
    path:'company-list',component:AllcompaniesComponent
  }
]

@NgModule({
  declarations: [
    CustomerListComponent,
    VerifydocumentComponent,
    SanctionletterComponent,
    AllcompaniesComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(crroutes),FormsModule,ReactiveFormsModule
  ]
})
export class CreaditmanagerModule { }
