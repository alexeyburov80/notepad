import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TasksService} from '../tasks.service';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Input() name = '';
  @Output() emitEditing = new EventEmitter();
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }

}
