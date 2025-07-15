import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  // New
  public name = signal('Guilherme Kuhnen');

  // Old
  public name$ = new BehaviorSubject('Guilherme Kuhnen $');

  //https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks/
}
