import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AcountheadModule } from './Modules/acounthead/acounthead.module';
import { CreaditmanagerModule } from './Modules/creaditmanager/creaditmanager.module';
import { OperationalexeModule } from './Modules/operationalexe/operationalexe.module';
import { RelationalexeModule } from './Modules/relationalexe/relationalexe.module';
import { PayemiComponent } from './payemi/payemi.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'log',component:LoginComponent
  },
  {
    path:'role',component:AdminLayoutComponent,
    children:[
      { path:'re',loadChildren: () => RelationalexeModule},
      { path:'oe',loadChildren: () =>OperationalexeModule},
      {path:'cr',loadChildren: () =>CreaditmanagerModule},
      {path:'ah',loadChildren:() =>AcountheadModule}
    ]
  },
  {
    path:'companies',component:CompaniesComponent,
    children:[
      {
        path:'payemi/:id',component:PayemiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
