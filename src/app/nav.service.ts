import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  private subject = new Subject<string>();

  sendMessage(message: string): void {
    this.subject.next(message);
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
