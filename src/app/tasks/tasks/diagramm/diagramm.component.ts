import { Component, OnInit, OnDestroy} from '@angular/core';
import {TasksService} from '../tasks.service';
import {DiagrammService} from './diagramm.service';

@Component({
  selector: 'app-diagramm',
  templateUrl: './diagramm.component.svg',
  styleUrls: ['./diagramm.component.css']
})
export class DiagrammComponent implements OnInit, OnDestroy {

  public diagrammService: DiagrammService;
  public width = 1900;
  public height = 1080;
  constructor(
      public tasksService: TasksService
  ) {
    this.diagrammService = new DiagrammService();
  }

  ngOnInit() {
    const doc = document.getElementById('svg2');
    const container = document.getElementById('svg');

    //

    this.diagrammService.createElements(container, this.tasksService.dataSource.data);
  }

  ngOnDestroy() {
    delete this.diagrammService;
    console.log('destroy');
  }

}
