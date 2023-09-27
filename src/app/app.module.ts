import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { GoogleMapsModule } from '@angular/google-maps'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatSlideToggleModule,
    UsersModule,
    //MatButtonModule
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
