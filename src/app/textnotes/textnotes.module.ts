import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextnotesComponent } from './textnotes/textnotes.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';


@NgModule({
  declarations: [TextnotesComponent],
  exports: [
    TextnotesComponent
  ],
    imports: [
        CommonModule,
        CKEditorModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
    ],
    providers: [{
        provide: MatDialogRef,
        useValue: {}
    }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
    }]
})
export class TextnotesModule { }
