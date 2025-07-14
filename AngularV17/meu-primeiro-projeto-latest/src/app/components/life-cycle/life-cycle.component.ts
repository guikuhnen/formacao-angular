import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Use OnPush for better performance
})
export class LifeCycleComponent
  implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy
{
  // Ciclos de vida do componente

  //@Input() public myNumber: number = 0;
  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number) {
    this.myNumber.set(value);
  }
  public myText = signal<string>('Texto Inicial');
  //private _destroy$ = timer(0, 1000).pipe(
  //  takeUntilDestroyed()
  //).subscribe(
  //  {
  //    next: (next) =>  //console.log('next', next),
  //    error: (error) => //console.log('error', error),
  //    complete: () => //console.log('complete'),
  //  }
  //);

  // 1 - Construtor/inicializador
  constructor(
    // Utilizado mais para injeção de dependências
    private fb: FormBuilder
  ) {
    //console.log('1 - Constructor called');
  }

  // 2 - Change Detections
  // implements OnChanges
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('2 - ngOnChanges called', changes);
    //if (changes['myNumber'].previousValue === 1) {
      //console.log('O número mudou para 2!');
    //}
  }

  // 3 - Inicialização
  ngOnInit(): void {
    //console.log('3 - ngOnInit called');
  }

  // 4 - Verifica se houve mudanças
  ngDoCheck(): void {
    //console.log('4 - ngDoCheck called');
  }

  // 5 - Após a visualização
  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    //console.log('5 - ngAfterViewInit called');
    //console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerHTML = 'Lyfe Cycle 2';
    //console.log(this.content.nativeElement.innerText);
    //console.log(this.text.nativeElement.innerText);
  }

  // 5 - Após o conteúdo
  @ContentChild('text') public text!: ElementRef;
  ngAfterContentInit(): void {
    //console.log('5 - ngAfterContentInit called');
    //console.log(this.text.nativeElement.innerText);
  }

  // 6 - Após a verificação do conteúdo
  ngAfterContentChecked(): void {
    //console.log('6 - ngAfterContentChecked called');
    //console.log(this.text.nativeElement.innerText);
  }

  // 6 - Após a verificação da visualização
  ngAfterViewChecked(): void {
    //console.log('6 - ngAfterViewChecked called');
    //console.log(this.content.nativeElement.innerText);
  }

  // 7 - Destruição do componente
  ngOnDestroy(): void {
    //console.log('7 - ngOnDestroy called');
    //this.destroy$.unsubscribe();
  }
}
