import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./map/map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MapmarkerComponent } from './map/mapmarker/mapmarker.component';



@NgModule({
  declarations: [
    MapComponent,
    MapmarkerComponent
  ],
  imports: [
    CommonModule,
    LeafletModule
  ],
  exports: [
    MapComponent,
    MapmarkerComponent,
  ]
})
export class LayoutsModule { }
