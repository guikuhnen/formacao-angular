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
  public getListTask: Signal<{ id: string; title: string }[] | null> = this.#apiService.getListTask;

  public getTaskId: Signal<{ id: string; title: string } | null> = this.#apiService.getTaskId;

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
    //this.#apiService.httpListTasks$().subscribe({
    // this.getTask$.subscribe({
    //   next: (tasks) => {
    //     this.getTask.set(tasks);
    //   },
    //   error: (err) => console.error(err),
    //   complete: () => console.log('Completed HTTP List Tasks'),
    // });

    // Hard 3
    this.#apiService.httpListTasks$().subscribe();

    this.#apiService.httpTaskId$('v2nCYaQujcZVGr441sqt').subscribe();
  }
}
