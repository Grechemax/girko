import { NgModule } from '@angular/core';
import {MusiciansComponent} from "./musicians.component";
import {RouterModule, Routes} from "@angular/router";

const musRoutes: Routes = [
  {path: '', component: MusiciansComponent}
]

@NgModule({
  imports: [RouterModule.forChild(musRoutes)],
  exports: [RouterModule],
})
export class MusicianRoutingModule { }
