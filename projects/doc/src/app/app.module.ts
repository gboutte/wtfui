import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WtfuiModule} from "../../../wtfui/src/lib/wtfui.module";
import {SharedDocModule} from "./shared-doc/shared-doc.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WtfuiModule,
    SharedDocModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
