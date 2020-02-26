import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextnotesComponent } from './textnotes/textnotes.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    ]
})
export class TextnotesModule { }
