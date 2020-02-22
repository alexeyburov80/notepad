import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {TasksDataInterface} from '../../tasks-data-interface';
// import {} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {

  files: any = [];

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: File[],
      // public dialogRef: MatDialogRef<UploadFileComponent>,
  ) {
    console.log('---------',this.data);

    for (const file of data) {
      this.files.push(file.name);
    }
  }

  uploadFile(event) {
    for (const element of event) {
      this.files.push(element.name);
      this.data.push(element);
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.data.splice(index, 1);
  }

}
