import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

const userComponents = [
  MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    userComponents,
  ],
  exports: [
    LoginComponent,
    userComponents,
  ]
})
export class UsersModule { }
