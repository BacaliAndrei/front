import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { QuestionComponent } from './question.component';


@NgModule({
    declarations: [
      QuestionComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      
    ],
    providers: [],
    bootstrap: [QuestionComponent]
  })
  export class AppModule { }