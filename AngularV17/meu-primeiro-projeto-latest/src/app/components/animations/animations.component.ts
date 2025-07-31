import {
  animate,
  group,
  keyframes,
  query,
  sequence,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { listItemsAnimation } from 'app/animations/list-items.animation';

@Component({
  selector: 'app-animations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animations.component.html',
  styleUrl: './animations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('move-ball', [
      state(
        'move-left',
        style({
          transform: 'scale(1) translateX(0) rotate(0deg)',
          // opacity: 0,
        })
      ),
      state(
        'move-right',
        style({
          transform: 'scale(0.7) translateX(300px) rotate(360deg)',
          // opacity: 1,
        })
      ),
      transition('move-left <=> move-right', animate('1s')),
      // transition(':enter', animate('4s')), // entradas transition('void => *', animate('4s')),
      transition(':enter', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 0,
              transform: 'scale(1) translateX(0) rotate(0deg)',
            }),
            style({
              opacity: 0.5,
              transform: 'scale(0.9) translateX(250px) rotate(180deg)',
            }),
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(300px) rotate(360deg)',
            }), // final, um style para cada segundo
          ])
        ),
      ]),
      // transition(':leave', animate('4s')), // saidas transition('* => void', animate('4s')),
      transition(':leave', [
        animate(
          '2s',
          keyframes([
            style({
              opacity: 1,
              transform: 'scale(0.7) translateX(300px) rotate(360deg)',
            }),
            style({
              opacity: 0.5,
              transform: 'scale(0.9) translateX(250px) rotate(180deg)',
            }),
            style({
              opacity: 0,
              transform: 'scale(1) translateX(0) rotate(0deg)',
            }), // inicio, um style para cada segundo
          ])
        ),
      ]),
      transition('* => move-left', animate('2s')),
      transition('* => move-right', animate('3s')),
      // transition('move-left => move-right', animate('1s')),
      // transition('move-right => move-left', animate('1s')),
    ]),
    // trigger('', []),
    listItemsAnimation(),
  ],
})
export class AnimationsComponent {
  // public moveIn = signal('move-left');
  public moveIn = signal('');
  public listItems = signal([
    {
      name: 'Item 1',
    },
    {
      name: 'Item 2',
    },
    {
      name: 'Item 3',
    },
    {
      name: 'Item 4',
    },
    {
      name: 'Item 5',
    },
  ]);

  public deleteItem(index: number): void {
    this.listItems().splice(index, 1);
  }

  public addNewItem(): void {
    this.listItems.update((items) => [
      ...items,
      { name: `Item ${items.length + 1}` },
    ]);
  }
}
