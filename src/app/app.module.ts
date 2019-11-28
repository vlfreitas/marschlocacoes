import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
