import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeSnippetComponent} from './code-snippet/code-snippet.component';
import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from './menu/sidebar/sidebar.component';
import { PageContainerComponent } from './container/page-container/page-container.component';
import {RouterLink} from "@angular/router";
import { PresentationContainerComponent } from './container/presentation-container/presentation-container.component';


@NgModule({
  declarations: [


    CodeSnippetComponent,
    SidebarComponent,
    PageContainerComponent,
    PresentationContainerComponent
  ],
  exports: [
    CodeSnippetComponent,
    SidebarComponent,
    PageContainerComponent,
    PresentationContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
  ]
})
export class SharedDocModule {
}
