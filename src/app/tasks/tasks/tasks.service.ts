import {Injectable} from '@angular/core';
import {CriticalityType, EstimationType, StateType, TasksDataInterface} from './tasks-data-interface';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {PopupEditTasksComponent} from './popup-edit-tasks/popup-edit-tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  dataSource: MatTableDataSource<TasksDataInterface>;
  private taskList: TasksDataInterface[] = [];
  private currentTask: TasksDataInterface;
  constructor(public dialog: MatDialog) {

    console.log('TasksService');

    this.initList();

    const tasks =  Array.from({length: this.taskList.length}, (_, k) => this.taskList[k]);
    this.dataSource = new MatTableDataSource(tasks);
  }

  aliases = [
    { eng: 'id', rus: 'id', visible: true, type: 'string' },
    { eng: 'name', rus: 'Название', visible: true, type: 'string' },
    { eng: 'description', rus: 'Описание', visible: true, type: 'string'  },
    { eng: 'checkList', rus: 'Чек лист для проверки задачи', visible: false, type: 'string'  },
    { eng: 'documents', rus: 'Документы', visible: false , type: 'string' },
    { eng: 'estimation', rus: 'Оценка время исполнения', visible: true, type: 'string'  },
    { eng: 'estimationType', rus: 'Тип оценки времени', visible: false, type: 'string'  },
    { eng: 'dedline', rus: 'Дедлайн', visible: true, type: 'date'  } ,
    { eng: 'criticality', rus: 'Критичность', visible: false, type: 'string'  },
    { eng: 'tags', rus: 'Теги', visible: true, type: 'string'  },
    { eng: 'startTime', rus: 'Время начала', visible: false, type: 'date'   },
    { eng: 'endTime', rus: 'Время завершения', visible: false, type: 'date'   },
    { eng: 'state', rus: 'Статус', visible: false, type: 'string'  },
    { eng: 'notifications', rus: 'Оповещения', visible: false, type: 'string' },
    { eng: 'editing', rus: 'Редактирование', visible: true, type: 'buttons'  }
  ];


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  columnsToDisplay() {
    const lst = [];
    this.aliases.forEach( (item) =>  { if (item.visible) { lst.push(item.eng); } });
    return lst;
  }

  updateFieldID() {
    this.dataSource.data = this.dataSource.data.map((v, it) => {
      v.id = it + 1
      return v;
    });
  }

  removeTaskByName(name: string) {
    this.dataSource.data = this.dataSource.data.filter( (v, it) => v.name !== name );
    this.updateFieldID();
  }

  createTask() {
    const task = {
      id: this.dataSource.data.length,
      name: '',
      estimation: 0,
      description: '',
      checkList: [],
      documents: [],
      estimationType: EstimationType.DAYS,
      dedline: new Date(),
      criticality: CriticalityType.NOTIMPORTANT,
      tags: [],
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
    this.currentTask = this.dataSource.data.find( (v, it) => v.name === name );
     const dialogRef = this.dialog.open(PopupEditTasksComponent, {
      width: '540px',
      data: this.currentTask
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', this.currentTask);
    });
  }


  initList() {
    this.taskList = [
      {
        id: 1,
        name: 'Hydrogen',
        estimation: 1.0079,
        description: 'H',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.NOTIMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 2,
        name: 'Helium',
        estimation: 4.0026,
        description: 'He',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 3,
        name: 'Lithium',
        estimation: 6.941,
        description: 'Li',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 4,
        name: 'Beryllium',
        estimation: 9.0122,
        description: 'Be',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 5,
        name: 'Boron',
        estimation: 10.811,
        description: 'B',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 6,
        name: 'Carbon',
        estimation: 12.0107,
        description: 'C',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 7,
        name: 'Nitrogen',
        estimation: 14.0067,
        description: 'N',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 8,
        name: 'Oxygen',
        estimation: 15.9994,
        description: 'O',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 9,
        name: 'Fluorine',
        estimation: 18.9984,
        description: 'F',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      },
      {
        id: 10,
        name: 'Neon',
        estimation: 20.1797,
        description: 'Ne',
        checkList: [],
        documents: [],
        estimationType: EstimationType.DAYS,
        dedline: new Date(),
        criticality: CriticalityType.IMPORTANT,
        tags: [],
        startTime: new Date(),
        endTime: new Date(),
        state: StateType.NEW,
        notifications: []
      }
    ];
  }
}
