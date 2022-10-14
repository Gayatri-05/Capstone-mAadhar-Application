import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharOperationsComponent } from './aadhar-operations/aadhar-operations.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { NewAadharComponent } from './new-aadhar/new-aadhar.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent,children:[
    {path:"findAllAadhar",component:AadharOperationsComponent},
  ]


  },
  {path:"userHome",component:UserdashboardComponent,children:[
    {path:"newAadhar",component:NewAadharComponent},
    {path:"findAadharById",component:AadharOperationsComponent},
    {path:"updateAadhar",component:AadharOperationsComponent},
    {path:"deleteAadhar",component:AadharOperationsComponent},
  ]
  },
  {path:"signUp",component:SignupComponent},
  {path:"signUpPage",component:SignupComponent},
  {path:"userHome/aadharRegister",component:NewAadharComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
