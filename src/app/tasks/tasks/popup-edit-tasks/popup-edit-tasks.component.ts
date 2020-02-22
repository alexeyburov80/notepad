import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TasksService} from '../tasks.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EstimationType, TasksDataInterface} from '../tasks-data-interface';
import {UploadFileComponent} from './upload-file/upload-file.component';




@Component({
    selector: 'app-popup-edit-tasks',
    templateUrl: './popup-edit-tasks.component.html',
    styleUrls: ['./popup-edit-tasks.component.css']
})
export class PopupEditTasksComponent implements OnInit {

    reactiveForm: FormGroup;

    public estimationTypeList = ['HOURS', 'DAYS', ' WEEKS', 'OF100'];
    public criticalityTypeList = [ 'NOTIMPORTANT', 'IMPORTANT', 'VERYIMPORTANT'];
    public stateTypeList = ['NEW', 'IN_PROCESS', 'DONE'];

    constructor(
        public dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: TasksDataInterface,
        public dialogRef: MatDialogRef<PopupEditTasksComponent>,
        private fb: FormBuilder,
    ) {

        console.log(data);
    }

    ngOnInit() {
        /// cdязываем форму формбилдер
        this.reactiveForm = this.fb.group({
            id: [this.data.id],
            name: [this.data.name],
            description: [this.data.description],
            checkList: [this.data.checkList],
            documents: [this.data.documents],
            estimation: [this.data.estimation],
            estimationType: [this.data.estimationType],
            dedline: [this.data.dedline],
            criticality: [this.data.criticality],
            tags: [this.data.tags],
            startTime: [this.data.startTime],
            endTime: [this.data.endTime],
            state: [this.data.state],
            notifications: [this.data.notifications],
        });

        // this.estimationTypeBuilld();
    }

    initData() {
        this.data.id = this.reactiveForm.value.id,
            this.data.name = this.reactiveForm.value.name,
            this.data.estimation = this.reactiveForm.value.estimation,
            this.data.description = this.reactiveForm.value.description,
            this.data.checkList = this.reactiveForm.value.checkList,
            this.data.documents = this.reactiveForm.value.documents,
            this.data.estimationType = this.reactiveForm.value.estimationType,
            this.data.dedline = this.reactiveForm.value.dedline,
            this.data.criticality = this.reactiveForm.value.criticality,
            this.data.tags = this.reactiveForm.value.tags,
            this.data.startTime = this.reactiveForm.value.startTime,
            this.data.endTime = this.reactiveForm.value.endTime,
            this.data.state = this.reactiveForm.value.state,
            this.data.notifications = this.reactiveForm.value.notifications;
    }

    initDocList() {
        const dialogRef = this.dialog.open(UploadFileComponent, {
            width: '540px',
            data:  this.data.documents
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', this.data.documents);
            // this.currentTask = result;
            // console.log('The dialog was closed', this.currentTask);
            // this.currentTask.id = 456789;

        });
    }

    estimationTypeBuilld() {
        // this.estimationTypeList.push(EstimationType[0].toString());
        // this.estimationTypeList.push(EstimationType[1].toString());
        // this.estimationTypeList.push(EstimationType[2].toString());
        // this.estimationTypeList.push(EstimationType[3].toString());
    }

    close() {
        const form: TasksDataInterface = this.reactiveForm.value;

        this.dialogRef.close();
    }
}
