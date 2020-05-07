import { BrowserModule } from "@angular/platform-browser";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AppRoutingModule } from "./app-routing.module";
import { AndaimesComponent } from './construction/andaimes/andaimes.component';
import { EscoramentoComponent } from './construction/escoramento/escoramento.component';
import { BathroomComponent } from './construction/banheiros/banheiros.component';
import { ContainerComponent } from './construction/container/container.component';
import { TentComponent } from './event/tent/tent.component';
import { StageComponent } from './event/stage/stage.component';
import { LuxuryBathroomComponent } from './event/luxurybathroom/luxurybathroom.component';
import { HotelComponent } from './projects/hotel/hotel.component';
import { ColdchamberComponent } from './projects/coldchamber/coldchamber.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, AndaimesComponent, EscoramentoComponent, BathroomComponent, ContainerComponent, TentComponent, StageComponent, LuxuryBathroomComponent, HotelComponent, ColdchamberComponent],
  imports: [BrowserModule, AppRoutingModule, LightboxModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
