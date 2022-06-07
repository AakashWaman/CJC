import { Byte } from "@angular/compiler/src/util";

export class Document {
    doc_Id:number
    addressproof:Byte[];
    bankstatement:Byte[];
    itr:Byte[];
    photo:Byte[];
    pdccheck:Byte[];
    thumb:Byte[];
    signature:Byte[];
    aadharcard:Byte[];
    panCard:Byte[];
    quotation:Byte[];
}
