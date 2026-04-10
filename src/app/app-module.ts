import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';

import { AuthInterceptor } from './services/auth.interceptor';
// import { AdminRoutingModule } from './admin/admin-routing.module';
// import { AdminModule } from './admin/admin.module';
// import { CommonModule } from '@angular/common';
// import { LogisticsModule } from './logistics/logistics.module';
// import { LogisticsRoutingModule } from './logistics/logistics-routing.module';
// import { LandingAuthRoutingModule } from './Landing-Auth/landing-auth-routing.module';
// import { LandingAuthModule } from './Landing-Auth/landing-auth.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
    // LandingAuthModule,
    // AdminModule,
    // LogisticsModule,
  
  ],
  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
