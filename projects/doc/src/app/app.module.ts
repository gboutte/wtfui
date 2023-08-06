import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WtfuiModule} from "../../../wtfui/src/lib/wtfui.module";
import {SharedDocModule} from "./shared-doc/shared-doc.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ComponentsExamplesModule} from "./components-examples/components-examples.module";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WtfuiModule,
    SharedDocModule,
    ReactiveFormsModule,
    ComponentsExamplesModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
