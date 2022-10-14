import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  msg:string=""
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  loginDetails: Array<Login>=[]
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.signUp(login).subscribe({
      next:(result:any)=>{
        if(result=="You can't create admin account"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["signUpPage"])
        }else if(result=="Account created successfully"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["userHome"])
        }else if(result=="Email Id already exists"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["signUpPage"])
        }else {
            this.msg=result;
        }
        console.log(result);
      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}
