import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TasksModule} from "./tasks/tasks.module";
import {DragDropDirective} from './tasks/tasks/popup-edit-tasks/drag-drop.directive';

@NgModule({
    declarations: [
        AppComponent,
        DragDropDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
