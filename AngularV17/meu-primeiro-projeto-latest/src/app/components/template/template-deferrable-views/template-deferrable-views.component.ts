import { Component } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { Observable, of, delay } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss',
})
export class TemplateDeferrableViewsComponent {
  public isTrue: boolean = false;
  
    public loadingData$: Observable<string[]> = of([
      'data1',
      'data2',
      'data3',
    ]).pipe(delay(3000));
  
}
