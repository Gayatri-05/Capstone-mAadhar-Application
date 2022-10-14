import { Component, OnInit } from '@angular/core';
import { Aadhar } from '../aadhar';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-aadhar-operations',
  templateUrl: './aadhar-operations.component.html',
  styleUrls: ['./aadhar-operations.component.css']
})
export class AadharOperationsComponent implements OnInit {

  aadhars:Array<Aadhar>=[];
  constructor(public as:AadharService) { }

  ngOnInit(): void {
    this.findAllAadhar();
  }
  flag:boolean = false;
  applicationid:number=0;
  dob:string ="";
  address:string ="";
  mobileno:string ="";

  findAllAadhar() {
    this.as.findAllAadhar().subscribe({
      next:(result:any)=>this.aadhars=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  updateAadhar(aadhar:any){
    this.flag= true;
    this.applicationid=aadhar.applicationid;
    this.dob=aadhar.dob;
    this.address=aadhar.address;
    this.mobileno=aadhar.mobileno;
}

  updateDataFromDb(){
    let aadhar = {applicationid:this.applicationid,address:this.address,dob:this.dob,mobileno:this.mobileno};
    this.as.updateAadhar(aadhar).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllAadhar();   
      }
    })
    this.flag=false;
  }

  deleteAadhar(applicationid:number){
    this.as.deleteAadharById(applicationid).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.findAllAadhar();   
      }
    })
  }

}
