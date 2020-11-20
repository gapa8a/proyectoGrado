import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {  path : '', redirectTo :'/index', pathMatch:'full' },
  {  path : 'index', component:IndexComponent },
  {  path : 'login', component:LoginComponent  },
  {  path : 'register', component:RegisterComponent },
  {  path : 'forgot', component:ForgotComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
   // LoginComponent,
    ForgotComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    // LoginComponent,
     RouterModule.forRoot(routes)



    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
