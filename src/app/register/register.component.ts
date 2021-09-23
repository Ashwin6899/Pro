import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register!:Register;

  constructor() { }

  ngOnInit(): void {
    this.register=new Register("","","","","","","","")
  }

  Submitregister()
  {
    console.log(this.register);
  }

}

class Register{
  FullName:string;
  Password:string;
  Email:string;
  Mobile:string;
  City:string;
  State:string;
  Qualification:string;
  YearOfCompletion:any;

  constructor(
    FullName:string,
    Password:string,
    Email:string,
    Mobile:string,
    City:string,
    State:string,
    Qualification:string,
    YearOfCompletion:any)
    {
      this.FullName=FullName;
      this.Password=Password;
      this.Email=Email;
      this.City=City;
      this.Mobile=Mobile;
      this.State=State;
      this.Qualification=Qualification;
      this.YearOfCompletion=YearOfCompletion
    }

}