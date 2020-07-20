import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './modals/modal-add/modal.component';
import {MaterialModule} from "./shared/material/material.module";
import {StorageService} from "./shared/services/storage.service";
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';
import { SearchPipePipe } from './shared/pipes/search-pipe.pipe';
import {LayoutsModule} from "./layouts/layouts.module";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalConfirmComponent,
    SearchPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LayoutsModule,
    LeafletModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
