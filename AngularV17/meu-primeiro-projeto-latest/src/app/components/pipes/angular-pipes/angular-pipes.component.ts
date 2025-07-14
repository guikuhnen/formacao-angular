import {
  AsyncPipe,
  CommonModule, // todos dentro do common module
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { CustomStringPipe } from '@pipes/custom-string.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomStringPipe
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {
  public date = signal(new Date());

  public json = signal([
    {
      name: 'Angular',
    },
  ]);

  public loadingData$: Observable<string[]> = of([
    'data1 ',
    'data2 ',
    'data3',
  ]).pipe(delay(1000));
}
