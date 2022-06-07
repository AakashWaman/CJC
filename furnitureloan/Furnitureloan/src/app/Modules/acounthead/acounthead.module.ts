import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanapplicationsComponent } from './loanapplications/loanapplications.component';
import { RouterModule, Routes } from '@angular/router';

const accountheadrout:Routes=[
  {
    path:'loanaaplications',component:LoanapplicationsComponent
  }
]

@NgModule({
  declarations: [
    LoanapplicationsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(accountheadrout)
  ]
})
export class AcountheadModule { }
