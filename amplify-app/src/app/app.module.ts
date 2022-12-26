import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
  declarations: [AppComponent, RestaurantsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}