import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ConstructionComponent } from './construction/construction.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "contato",
    component: ContactComponent
  },
  {
    path: "construcao",
    component: ConstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
