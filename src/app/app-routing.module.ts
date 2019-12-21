import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { EscoramentoComponent } from './construction/escoramento/escoramento.component';
import { AndaimesComponent } from './construction/andaimes/andaimes.component';
import { BathroomComponent } from './construction/bathroom/bathroom.component';
import { ContainerComponent } from './construction/container/container.component';
import { StageComponent } from './event/stage/stage.component';
import { TentComponent } from './event/tent/tent.component';
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
    path: "palcos",
    component: StageComponent
  },
  {
    path: "banheirosluxo",
    component: LuxuryBathroomComponent
  },
  {
    path: "tendas",
    component: TentComponent
  },

  //Projects
  {
    path: "camara",
    component: ColdchamberComponent
  },
  {
    path: "hotel",
    component: HotelComponent
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
