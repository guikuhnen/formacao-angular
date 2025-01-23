import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss',
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = true;

  public loadingData$: Observable<string[]> = of([
    'data1',
    'data2',
    'data3',
  ]).pipe(delay(3000));

  public items: Array<{ name: string }> = [{ name: 'Guilherme' }];
  public itemsEmpty: Array<{ name: string }> = [];

  public switchCondition: string = 'A';

  public trackByFn(index: number): number {
    return index;
  }

  public addNewName(value: string): any {
    return this.items.push({ name: value });
  }
}
