import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeSnippetComponent} from './code-snippet/code-snippet.component';
import {HttpClientModule} from "@angular/common/http";
import {SidebarComponent} from './menu/sidebar/sidebar.component';
import { PageContainerComponent } from './container/page-container/page-container.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [


    CodeSnippetComponent,
    SidebarComponent,
    PageContainerComponent
  ],
  exports: [
    CodeSnippetComponent,
    SidebarComponent,
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
  ]
})
export class SharedDocModule {
}
