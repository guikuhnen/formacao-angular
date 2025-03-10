import { Component, Input, signal } from '@angular/core';

function meuToUpperCase(value: string): string {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  // SIGNAL
  public name = signal('Sem dados');
  @Input({
    required: true,
    transform: meuToUpperCase
  }) set inputName(value: string) {
    this.name.set(value);
  }

  // @Input({
  //   alias: 'Nome',
  //   required: true,
  //   transform: meuToUpperCase
  // })
  // public inputName: string = 'Sem dados';
}
