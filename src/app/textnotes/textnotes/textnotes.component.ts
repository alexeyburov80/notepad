import {Component, Inject, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-textnotes',
  templateUrl: './textnotes.component.html',
  styleUrls: ['./textnotes.component.css']
})
export class TextnotesComponent implements OnInit {

  public editor = ClassicEditor;
  public notes: string[] = [];

  editorData = '<h4>Notes about the current task</h4><p>...</p><p>...</p>';

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: string[]
  ) { }

  ngOnInit() {

    // this.editor.ui.getEditableElement().parentElement.insertBefore(
    //     this.editor.ui.view.toolbar.element,
    //     this.editor.ui.getEditableElement()
    // );
  }

  uploadFile(event) {
    for (const element of event) {
      this.notes.push(element.name);
      this.data.push(element);
    }
  }

  deleteAttachment(index) {
    this.notes.splice(index, 1);
    this.data.splice(index, 1);
  }

  save() {
    this.data.push(this.editorData);
    console.log(this.data);
  }

  cancel() {

  }
}
