import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent {
  public name: string = 'Guilherme Kuhnen';
  public age: number = 28;
  public condition: string = this.age > 1 ? 'Maior que 1' : 'Menor que 1';
  public isDisabled = true;
  public srcValue: string =
    'https://angular.io/assets/images/logos/angular/angular.png';
  public isTextDecoration: string = this.age > 27 ? 'underline' : 'none';

  constructor() {
    setTimeout(() => {
      this.name = 'João';
    }, 1000);
  }

  public sum(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }

  public sumAge(): void {
    this.age++;
  }

  public subAge(): void {
    this.age--;
  }

  public onKeyDown(event: Event): void {
    console.log(event);
  }

  public onMouseMove(event: MouseEvent): void {
    console.log(event);
  }
}
