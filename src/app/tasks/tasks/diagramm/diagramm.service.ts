import {Injectable} from '@angular/core';
import {TasksService} from '../tasks.service';
import {MatTableDataSource} from '@angular/material';
import {TasksDataInterface} from '../tasks-data-interface';

@Injectable({
    providedIn: 'root'
})
export class DiagrammService {

    constructor() {

    }

    createNodeSvg = (tag, attrs) => {
        let el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (let k in attrs) {
            if (k === 'xlink:href') {
                el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attrs[k]);
            } else {
                el.setAttribute(k, attrs[k]);
            }
        }
        return el;
    }

    createElements(container: HTMLElement, dataSource: TasksDataInterface[]) {

        let id = 50;

        const group = this.createNodeSvg('g', {
            transform: 'translate(120,50)'
        });
        this.setGrid(group, 50, 100, 32, dataSource.length);

        for (const task of dataSource) {

            console.log(task.name, task.startTime.getDate())

            const g = this.createNodeSvg('g', {});
            const head = this.createNodeSvg('text', {
                class: 'textClass',
                x: 100,
                y: id
            });
            head.innerHTML = task.name;
            g.appendChild(head);

            const rect =  this.createNodeSvg('rect', {
                class: 'textClass',
                x: task.startTime.getDate() * 50 + 150,
                y: id,
                ry: 3,
                width: task.endTime.getDate() * 50 - task.startTime.getDate() * 50,
                height: 6.0,
                style: 'fill:#808080'
            });
            g.appendChild(rect);
            group.appendChild(g);
            id  += 100;
        }
        container.appendChild(group);
    }

    setGrid(container: HTMLElement, tileWidth: number, tileHeight: number, countW: number, countH: number) {
        const g = this.createNodeSvg('g', {});

        for (let i = 0; i < countW; ++i) {
            const dateText = this.createNodeSvg('text', {
                class: 'textClass',
                x: i * tileWidth + 200,
                y: -20
            });

            dateText.innerHTML = i + 1;
            g.appendChild(dateText);

            const line = this.createNodeSvg('line', {
                class: 'textClass',
                x1: i * tileWidth + 200,
                y1: 0,
                x2: i * tileWidth,
                y2: 10000,
                style: 'stroke:#808080; stroke-width:0.5'
            });
            g.appendChild(line);
        }

        for (let j = 0; j <= countH; ++j) {
            const line = this.createNodeSvg('line', {
                class: 'textClass',
                x1: 0,
                y1: j * tileHeight,
                x2: 10000,
                y2: j * tileHeight,
                style: 'stroke:#606060; stroke-width:1.5'
            });
            g.appendChild(line);
        }
        container.appendChild(g);
    }
}
