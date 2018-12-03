import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MusiciansComponent} from "./musicians.component";
import {MusicianRoutingModule} from "./musician-routing.module";

@NgModule({
  imports: [CommonModule, MusicianRoutingModule],
  declarations: [MusiciansComponent]
})
export class MusicianModule { }
