import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Companyregistration } from '../Model/companyregistration';
import { Enquiry } from '../Model/enquiry';
import { Ledger } from '../Model/ledger';
import { SanctionLetter } from '../Model/sanction-letter';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  postenquiryurl:string="http://localhost:8080/requiredequiry/register";
  getenquiryurl:string="http://localhost:8080/requiredequiry/showdata";
  postcompanyurl:string="http://localhost:8080/companyregister/companyadd";
  getcibilurl:string="http://localhost:8080/requiredequiry/getcibil";
  putcibilurl:string="http://localhost:8080/requiredequiry/editdata";
  deleteenquiryurl:string="http://localhost:8080/requiredequiry/delete";
  adddoc:string="http://localhost:8080/companyregister/postdoc";
  getcompanyurl:string="http://localhost:8080/companyregister/getallCompany";
  getpendingcompanyurl:string="http://localhost:8080/companyregister/getpendingcompany";
  documenturl:string = "http://localhost:8080/companyregister/getdoc";
  chngestatusurl:string ="http://localhost:8080/companyregister/updateverification";
  companyidurl:string="http://localhost:8080/companyregister/companyid";
  addsanctionurl:string = "http://localhost:8080/companyregister/addsanction";
  sanctionmailurl:string = "http://localhost:8080/companyregister/sendmail";
  allapprovedcompanies:string="http://localhost:8080/companyregister/getapprovedcompanies";
  updateledger:string="http://localhost:8080/companyregister/putLedger";
  getsinglecompanyurl:string="http://localhost:8080/companyregister/getonecompany";

  toaddEnquiry(enq:Enquiry)
  {
    return this.http.post(this.postenquiryurl,enq);
  }
  getEnquirydata():Observable<Enquiry[]>{
    return this.http.get<Enquiry[]>(this.getenquiryurl);
  }
  saveCompanyData(company:Companyregistration){
    return this.http.post(this.postcompanyurl,company);
  }
  getCIBIL():Observable<any>{
    return this.http.get<any>(this.getcibilurl);
  }
  putCibi(e:Enquiry,eid:number){
    return this.http.put(this.putcibilurl+"/"+eid,e);
  }
  delenquiry(id:number){
    return this.http.delete(this.deleteenquiryurl+"/"+id);
  }
  putDocument(uploadDocument:any,id:number){
    return this.http.put(this.adddoc+"/"+id,uploadDocument);
  }

  toallcompany():Observable<Companyregistration[]>{
    return this.http.get<Companyregistration[]>(this.getcompanyurl);
  }

  topendingcompany():Observable<Companyregistration[]>{
    return this.http.get<Companyregistration[]>(this.getpendingcompanyurl);
  }

  todocument(id:number):Observable<Document>{
    return this.http.get<Document>(this.documenturl+"/"+id);
  }

  toverify(i:Number,s:string){
    return this.http.put(this.chngestatusurl+"/"+i+"/"+s,null);
  }

  togetcompanyid(s:string):Observable<any>{
    return this.http.get<any>(this.companyidurl+"/"+s);
  }
  postSanction(sanctionletter:SanctionLetter,id:number){
    return this.http.put(this.addsanctionurl+"/"+id,sanctionletter);
  }

  mailletter(company:Companyregistration){
    return this.http.post(this.sanctionmailurl,company);
  }

  togetallapprovedcompanies():Observable<Companyregistration[]>{
    return this.http.get<Companyregistration[]>(this.allapprovedcompanies);
  }

  putledger(ledger:Ledger,id:number){
    return this.http.put(this.updateledger+"/"+id,ledger);
  }

  togetcompany(id:number):Observable<Companyregistration>{
    return this.http.get<Companyregistration>(this.getsinglecompanyurl);
  }
}
