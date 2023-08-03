import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [


    CodeSnippetComponent
  ],
  exports: [
    CodeSnippetComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedDocModule { }
