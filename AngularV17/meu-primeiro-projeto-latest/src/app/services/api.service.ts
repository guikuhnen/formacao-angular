import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  // New
  public name = signal('Guilherme Kuhnen');

  // Old
  public name$ = new BehaviorSubject('Guilherme Kuhnen $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  // public httpListTasks$(): Observable<ITask[]> {
  //   return this.#http.get<ITask[]>(this.#url()).pipe(shareReplay());
  // }

  // Hard 3
  #setListTask = signal<ITask[] | null>(null);
  get getListTask() { 
    return this.#setListTask.asReadonly();
  }
  public httpListTasks$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => {
        this.#setListTask.set(res);
      })
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() { 
    return this.#setTaskId.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => {
        this.#setTaskId.set(res);
      })
    );
  }
}
