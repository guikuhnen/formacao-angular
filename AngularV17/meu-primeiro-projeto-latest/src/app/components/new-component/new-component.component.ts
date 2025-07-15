import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent implements OnInit {
  public name: string = "New Component";
  
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
      this.#apiService.name$.next('Guilherme Kuhnen $$');

      this.#apiService.name.set('Guilherme Kuhnen 2');
      setTimeout(() => {
        console.log(this.#apiService.name());
      }, 2000);
    }
}
