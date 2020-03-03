import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.css']
})
export class DeadlinesComponent implements OnInit {

  constructor(public taskService: TasksService) { }

  ngOnInit() {
  }

}
