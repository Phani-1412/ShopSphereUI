import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    CommonModule
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 