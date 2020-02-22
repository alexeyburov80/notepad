import {Component, Inject, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {TasksService} from './tasks.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {Subscription} from 'rxjs';
import {NavService} from '../../nav.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})

export class TasksComponent implements OnInit, OnDestroy {

  message: string;
  subscription: Subscription;
  public view: string;

  constructor(public tasksService: TasksService, private navService: NavService) {
  }

  ngOnInit() {
    this.subscription = this.navService.getMessage().subscribe(message => { this.setView(message); });
  }
  setView(view: string) {
    this.view = view;
  }

  ngOnDestroy(): void {

    this.subscription.unsubscribe();
  }

}
