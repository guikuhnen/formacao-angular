import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
  effect
} from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  public firstName: WritableSignal<string> = signal('Guilherme');
  public lastName: WritableSignal<string> = signal('Kuhnen');

  public fullName: Signal<string> = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  });

  public array: WritableSignal<number[]> = signal([1]);

  /**effect */
  constructor() {
    effect(() => {
      console.log('First Name:', this.firstName());
    });

    effect(() => {
      console.log('Last Name:', this.lastName());
    });

    effect(() => {
      console.log('Full Name:', this.fullName());
    });

    effect(() => {
      console.log('Array:', this.array());
    });
  }

  public updateName() {
    this.firstName.set('Guilherme 2');
  }

  public updateArray() {    
    this.array.update((oldValue: number[]) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
