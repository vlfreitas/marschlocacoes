import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { EscoramentoComponent } from './construction/escoramento/escoramento.component';
import { AndaimesComponent } from './construction/andaimes/andaimes.component';
import { BathroomComponent } from './construction/banheiros/banheiros.component';
import { ContainerComponent } from './construction/container/container.component';
import { LuxuryBathroomComponent } from './event/luxurybathroom/luxurybathroom.component';
import { ColdchamberComponent } from './projects/coldchamber/coldchamber.component';
import { HotelComponent } from './projects/hotel/hotel.component';

const routes: Routes = [
  //Home
  {
    path: "",
    component: HomeComponent
  },

  //Construction
  {
    path: "andaimes",
    component: AndaimesComponent
  },
  {
    path: "banheiros",
    component: BathroomComponent
  },
  {
    path: "containers",
    component: ContainerComponent
  },
  {
    path: "escoramento",
    component: EscoramentoComponent
  },

  //Events
  {
    path: "banheirosluxo",
    component: LuxuryBathroomComponent
  },

  //Projects
  {
    path: "camarafria",
    component: ColdchamberComponent
  },
  {
    path: "hotel",
    component: HotelComponent
  },
  {
    path: "camaradescontaminacao",
    component: ColdchamberComponent
  },

  //Contact
  {
    path: "contato",
    component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
