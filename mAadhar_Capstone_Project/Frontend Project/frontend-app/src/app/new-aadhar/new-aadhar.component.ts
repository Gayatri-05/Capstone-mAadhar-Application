import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-new-aadhar',
  templateUrl: './new-aadhar.component.html',
  styleUrls: ['./new-aadhar.component.css']
})
export class NewAadharComponent implements OnInit {

  aadharRef = new FormGroup({
    applicationid:new FormControl(),
    name:new FormControl(),
    dob:new FormControl(),
    address:new FormControl(),
    emailid:new FormControl(),
    mobileno:new FormControl()
  })
  Msg : string = ""
  constructor(public as:AadharService) { }

  ngOnInit(): void {
  }

  newAadhar() {
    let aadhar = this.aadharRef.value;
    this.as.newAadhar(aadhar).subscribe({
      next:(result:any)=>this.Msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })

    this.aadharRef.reset();
  }
}
