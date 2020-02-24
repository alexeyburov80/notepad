import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TasksDataInterface} from '../tasks/tasks/tasks-data-interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('http://localhost:3000/tasks', {
      observe: 'body',
      responseType: 'json'
    });
  }

  updateTasks(task: TasksDataInterface) {
    return this.http.put(`http://localhost:3000/tasks/${task.id}`, task, {
      observe: 'events'
    });
  }
}
