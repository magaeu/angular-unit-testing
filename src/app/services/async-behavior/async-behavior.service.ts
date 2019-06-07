import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncBehaviorService {

  names: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() { }

  getNames(): Observable<string[]> {
    return  this.names;
  }

  updateNames(names: string[]) {
    this.names.next(names);
  }
}
