import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsumeServiceComponent implements OnInit {
  // Old
  //constructor(
  // private _apiService: ApiService
  //) {}

  // New
  #apiService = inject(ApiService);

  // public getTask = signal<null | { id: string; title: string }[]>(null);

  // Medium 2
  //public getTask$ = this.#apiService.httpListTasks$();

  // Hard 3
  //public getTask$ = toSignal(this.#apiService.httpListTasks$());
  public getTaskList = this.#apiService.getTaskList;
  public getTaskListError = this.#apiService.getTaskListError;

  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;

  public getTaskCreateError = this.#apiService.getTaskCreateError;

  public getTaskUpdateError = this.#apiService.getTaskUpdateError;

  public getTaskDeleteError = this.#apiService.getTaskDeleteError;

  ngOnInit(): void {
    // New
    //console.log(this.#apiService.name());
    //// Old
    //this.#apiService.name$.subscribe({
    //  next: (name) => console.log(name),
    //  error: (err) => console.error(err),
    //  complete: () => console.log('Completed $'),
    //});
    //setTimeout(() => {
    //  console.log(this.#apiService.name());
    //}, 2000);

    // Easy 1
    //this.#apiService.getTaskList$().subscribe({
    // this.getTask$.subscribe({
    //   next: (tasks) => {
    //     this.getTask.set(tasks);
    //   },
    //   error: (err) => console.error(err),
    //   complete: () => console.log('Completed HTTP List Tasks'),
    // });

    // Hard 3
    this.#apiService.httpTaskList$().subscribe();

    // this.#apiService.httpTaskId$('G0NUogLpJMVp7I8NSyV6').subscribe();
  }

  public httpTaskId(id: string) {
    return this.#apiService.httpTaskId$(id).subscribe({
      error: (err) => console.error('Error fetching task by ID:', err),
    });
  }

  public httpTaskCreate(title: string) {
    // OK
    // return this.#apiService.httpTaskCreate$(title).subscribe({
    //   next: (task) => this.#apiService.httpTaskList$().subscribe(),
    //   error: (err) => console.error('Error creating task:', err)
    // });

    // Melhor
    return this.#apiService
      .httpTaskCreate$(title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe({
        error: (err) => console.error('Error creating task:', err),
      });
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService
      .httpTaskUpdate$(id, title)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe({
        error: (err) => console.error('Error updating task:', err),
      });
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
      .httpTaskDelete$(id)
      .pipe(concatMap(() => this.#apiService.httpTaskList$()))
      .subscribe({
        error: (err) => console.error('Error deleting task:', err),
      });
  }
}
