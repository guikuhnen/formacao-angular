import { Component, signal } from '@angular/core';

@Component({
  selector: 'ListComponent',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public addItem = signal(true);
}
