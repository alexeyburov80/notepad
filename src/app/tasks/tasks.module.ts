import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks/tasks.component';
import {
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatNativeDateModule,
    // MatMomentDateModule,
    MatGridListModule,
    MatDatepickerModule, MatToolbarModule, MatButtonToggleModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonsComponent} from './tasks/buttons/buttons.component';
import {PopupEditTasksComponent} from './tasks/popup-edit-tasks/popup-edit-tasks.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import {UploadFileComponent} from './tasks/popup-edit-tasks/upload-file/upload-file.component';
import { DiagrammComponent } from './tasks/diagramm/diagramm.component';
import { CalendarComponent } from './tasks/calendar/calendar.component';
import {TextnotesModule} from '../textnotes/textnotes.module';
import {TextnotesComponent} from '../textnotes/textnotes/textnotes.component';

@NgModule({
    declarations: [
        TasksComponent,
        ButtonsComponent,
        PopupEditTasksComponent,
        UploadFileComponent,
        DiagrammComponent,
        CalendarComponent,
        // ButtonsComponent
    ],
    exports: [
        TasksComponent,
        UploadFileComponent,
    ],
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatDialogModule,
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        MatGridListModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MomentModule,
        MatToolbarModule,
        MatButtonToggleModule,
        TextnotesModule
    ],
    entryComponents: [
        PopupEditTasksComponent,
        UploadFileComponent,
        TextnotesComponent
    ]
})
export class TasksModule {
}
