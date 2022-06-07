
import { Accountdetail } from "./accountdetail";
import { Address } from "./address";
import { Document } from "./document";
import { Gurantor } from "./gurantor";
import { Ledger } from "./ledger";
import { Previousloan } from "./previousloan";
import { SanctionLetter } from "./sanction-letter";


export class Companyregistration {
    company_id:number;
    companyname:string;
    company_email:string;
    company_mobile:DoubleRange;
    company_shopactno:string;
    company_startdate:Date;
    company_gst:string;
    company_partnerno:number;
    company_pan:string;
    required_loan:number;
    tenure:number;
    interestrate:number;
    address:Address;
    gurantor:Gurantor;
    accountdetail:Accountdetail;
    document:Document;
    preloan:Previousloan;
    cmstatus:string;
    sanction:SanctionLetter;
    ledger:Ledger;
}
