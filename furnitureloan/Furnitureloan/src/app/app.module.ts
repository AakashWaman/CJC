import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FixedPluginModule } from './Shared/fixed-plugin/fixed-plugin.module';
import { FooterModule } from './Shared/footer/footer.module';
import { NavbarModule } from './Shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AcountheadModule } from './Modules/acounthead/acounthead.module';
import { PayemiComponent } from './payemi/payemi.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    HomeComponent,
    PayemiComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SidebarModule,NavbarModule,FooterModule,FixedPluginModule,RouterModule,FormsModule,HttpClientModule,AcountheadModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
