import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEnquiriesComponent } from './all-enquiries/all-enquiries.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';

const operationalroute:Routes=[
  {
    path:'all-enquiries',component:AllEnquiriesComponent
  },
  {
    path:'customer-list',component:CustomerListComponent
  }
]

@NgModule({
  declarations: [
    AllEnquiriesComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(operationalroute)
  ]
})
export class OperationalexeModule { }
