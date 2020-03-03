import {Injectable} from '@angular/core';
import {CriticalityType, EstimationType, StateType, TasksDataInterface} from './tasks-data-interface';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {PopupEditTasksComponent} from './popup-edit-tasks/popup-edit-tasks.component';
import {HttpService} from '../../services/http.service';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    public dataSource: MatTableDataSource<TasksDataInterface>;
    private taskList: TasksDataInterface[] = [];
    private currentTask: TasksDataInterface;

    constructor(public dialog: MatDialog,
                private http: HttpService) {

        // this.http.getTasks().subscribe(
        //     // tslint:disable-next-line:no-shadowed-variable
        //     tasks => {
        //         console.log(tasks);
        //     }
        // );

        this.initList();

        const tasks = Array.from({length: this.taskList.length}, (_, k) => this.taskList[k]);
        this.dataSource = new MatTableDataSource(tasks);
    }

    aliases = [
        {eng: 'id', rus: 'id', visible: true, type: 'string'},
        {eng: 'name', rus: 'Название', visible: true, type: 'string'},
        {eng: 'description', rus: 'Описание', visible: true, type: 'string'},
        {eng: 'notesList', rus: 'Чек лист для проверки задачи', visible: false, type: 'string'},
        {eng: 'documents', rus: 'Документы', visible: false, type: 'string'},
        {eng: 'estimation', rus: 'Оценка время исполнения', visible: true, type: 'string'},
        {eng: 'estimationType', rus: 'Тип оценки времени', visible: false, type: 'string'},
        {eng: 'dedline', rus: 'Дедлайн', visible: true, type: 'date'},
        {eng: 'criticality', rus: 'Критичность', visible: false, type: 'string'},
        {eng: 'tags', rus: 'Теги', visible: true, type: 'string'},
        {eng: 'startTime', rus: 'Время начала', visible: false, type: 'date'},
        {eng: 'endTime', rus: 'Время завершения', visible: false, type: 'date'},
        {eng: 'state', rus: 'Статус', visible: false, type: 'string'},
        {eng: 'notifications', rus: 'Оповещения', visible: false, type: 'string'},
        {eng: 'editing', rus: 'Редактирование', visible: true, type: 'buttons'}
    ];


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    columnsToDisplay() {
        const lst = [];
        this.aliases.forEach((item) => {
            if (item.visible) {
                lst.push(item.eng);
            }
        });
        return lst;
    }

    updateFieldID() {
        this.dataSource.data = this.dataSource.data.map((v, it) => {
            v.id = it + 1;
            return v;
        });
    }

    removeTaskByName(name: string) {
        this.dataSource.data = this.dataSource.data.filter((v, it) => v.name !== name);
        this.updateFieldID();
    }

    createTask() {
        const task = {
            id: this.dataSource.data.length,
            name: '',
            estimation: 0,
            description: '',
            notesList: [],
            documents: [],
            estimationType: EstimationType.DAYS,
            dedline: new Date(),
            criticality: CriticalityType.NOTIMPORTANT,
            tags: 'eco',
            startTime: new Date(),
            endTime: new Date(),
            state: StateType.NEW,
            notifications: []
        };
        const dialogRef = this.dialog.open(PopupEditTasksComponent, {
            width: '540px',
            data: task
        });

        dialogRef.afterClosed().subscribe(result => {
            this.dataSource.data.push(task);
            console.log('The dialog was closed', this.dataSource.data);
            this.updateFieldID();
        });
    }

    updateTaskByName(name: string) {
        this.currentTask = this.dataSource.data.find((v, it) => v.name === name);
        const dialogRef = this.dialog.open(PopupEditTasksComponent, {
            width: '540px',
            data: this.currentTask
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', this.currentTask);

            /// todo mem check!
           //  this.http.updateTasks(this.currentTask).subscribe(res => {
           //   console.log(res);
           // });
        });
    }

    initList() {
        this.taskList = [
            {
                id: 1,
                name: 'Development of design',
                estimation: 1.0079,
                description: '',
                notesList: [],
                documents: [],
                estimationType: EstimationType.DAYS,
                dedline: new Date(),
                criticality: CriticalityType.NOTIMPORTANT,
                tags: 'eco',
                startTime: new Date(),
                endTime: new Date(),
                state: StateType.NEW,
                notifications: []
            },
            {
                id: 2,
                name: 'Frontend',
                estimation: 4.0026,
                description: 'HTML, CSS & JavaScript',
                notesList: [],
                documents: [],
                estimationType: EstimationType.DAYS,
                dedline: new Date(),
                criticality: CriticalityType.IMPORTANT,
                tags: 'face',
                startTime: new Date(),
                endTime: new Date(),
                state: StateType.NEW,
                notifications: []
            },
            {
                id: 3,
                name: 'Backend',
                estimation: 6.941,
                description: 'python PSQL SQLITE',
                notesList: [],
                documents: [],
                estimationType: EstimationType.DAYS,
                dedline: new Date(),
                criticality: CriticalityType.IMPORTANT,
                tags: 'opacity',
                startTime: new Date(),
                endTime: new Date(),
                state: StateType.NEW,
                notifications: []
            },
            {
                id: 4,
                name: 'Distribution',
                estimation: 9.0122,
                description: '',
                notesList: [],
                documents: [],
                estimationType: EstimationType.DAYS,
                dedline: new Date(),
                criticality: CriticalityType.IMPORTANT,
                tags: 'track_changes',
                startTime: new Date(),
                endTime: new Date(),
                state: StateType.NEW,
                notifications: []
            },
            {
                id: 5,
                name: 'Deploying',
                estimation: 10.811,
                description: 'Software deployment is all of the activities that make a software system available for use.',
                notesList: [],
                documents: [],
                estimationType: EstimationType.DAYS,
                dedline: new Date(),
                criticality: CriticalityType.IMPORTANT,
                tags: 'work_outline',
                startTime: new Date(),
                endTime: new Date(),
                state: StateType.NEW,
                notifications: []
            }
        ];
    }
}
