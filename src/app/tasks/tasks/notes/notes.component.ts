import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {



  constructor(public taskService: TasksService) {

  }


  ngOnInit() {
  }

}
