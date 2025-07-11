import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck {
  // Ciclos de vida do componente
  
  @Input() public myNumber: number = 0;
  public myText = signal<string>('Texto Inicial');

  // 1 - Construtor/inicializador
  constructor(
    // Utilizado mais para injeção de dependências
    private fb: FormBuilder
  ) {
    console.log('1 - Constructor called');
  }

  // 2 - Change Detections
  // implements OnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 - ngOnChanges called', changes);
    if (changes['myNumber'].previousValue === 1) {
      console.log('O número mudou para 2!');
    }
  }

  // 3 - Inicialização
  ngOnInit(): void {
    console.log('3 - ngOnInit called');
  }

  // 4 - Verifica se houve mudanças
  ngDoCheck(): void {
    console.log('4 - ngDoCheck called');
  }
}
