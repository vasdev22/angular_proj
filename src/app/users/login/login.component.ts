import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name = 'Vasu';
  email = 'vasu23@yopmail.com';
  getMyName(){
    alert(this.name);
  }

  getValues(values: any){
    console.warn(values);
  }

  designations: any = [
    {value: 'engineer', viewValue: 'Engineer'},
    {value: 'doctor', viewValue: 'Doctor'},
  ];
}
