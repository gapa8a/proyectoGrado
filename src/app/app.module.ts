import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  }

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    LoginModule,
    RouterModule.forRoot(routes)



    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
