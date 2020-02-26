import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-textnotes',
  templateUrl: './textnotes.component.html',
  styleUrls: ['./textnotes.component.css']
})
export class TextnotesComponent implements OnInit {

  public editor = ClassicEditor;

  editorData = '<h4>Notes about the current task</h4><p>...</p><p>...</p>';

  constructor() { }

  ngOnInit() {

    // this.editor.ui.getEditableElement().parentElement.insertBefore(
    //     this.editor.ui.view.toolbar.element,
    //     this.editor.ui.getEditableElement()
    // );
  }

  save() {
    console.log(this.editorData);
  }
}
