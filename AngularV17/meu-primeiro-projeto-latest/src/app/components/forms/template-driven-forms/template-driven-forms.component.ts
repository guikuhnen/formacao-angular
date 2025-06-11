import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{ comida: string; preco: string }>>([
    {
      comida: 'Pizza',
      preco: 'R$ 30,00',
    },
    {
      comida: 'Hambúrguer',
      preco: 'R$ 20,00',
    },
    {
      comida: 'Salada',
      preco: 'R$ 15,00',
    },
    {
      comida: 'Sushi',
      preco: 'R$ 50,00',
    },
  ]);

  public onSubmit(form: NgForm): void {
    // Aqui você pode processar os dados do formulário, como enviar para um servidor
    if (form.valid) {
      console.log('Dados do formulário:', form.value);
      // Limpar o formulário após o envio
      form.resetForm();
    } else {
      console.error('Formulário inválido');
    }
  }
}
