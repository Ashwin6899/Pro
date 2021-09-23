import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ListexamComponent } from './listexam/listexam.component';
import { RegisterComponent } from './register/register.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';

const routes: Routes = [
  {path:'',component:StudentloginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:StudentloginComponent},
  {path:'Forgotpassword',component:ForgotpasswordComponent},
  {path:'Listexam',component:ListexamComponent},
  {path:'Exam',component:ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
