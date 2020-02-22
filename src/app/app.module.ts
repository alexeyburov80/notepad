import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TasksModule} from "./tasks/tasks.module";
import {DragDropDirective} from './tasks/tasks/popup-edit-tasks/drag-drop.directive';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './nav/nav.component';
import {MatTreeModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        DragDropDirective,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TasksModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTreeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
