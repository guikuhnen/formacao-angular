import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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

  ngOnInit(): void {
    // New
    console.log(this.#apiService.name());

    // Old
    this.#apiService.name$.subscribe({
      next: (name) => console.log(name),
      error: (err) => console.error(err),
      complete: () => console.log('Completed $'),
    });

    setTimeout(() => {
      console.log(this.#apiService.name());
    }, 2000);
  }
}
