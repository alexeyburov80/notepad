import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {TasksService} from './tasks.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})

export class TasksComponent implements OnInit {

  constructor(public tasksService: TasksService) {
  }
  public view = 'tasks';
  ngOnInit() {
    console.log('TasksComponent');
  }
  setView(view: string) {
    this.view = view;
  }

}
