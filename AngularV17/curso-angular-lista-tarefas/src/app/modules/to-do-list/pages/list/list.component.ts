import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { IListItems } from '../../interfaces/IListItems.interface';

@Component({
  selector: 'ListComponent',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public addItem = signal(true);

  // private
  #setListItems = signal<IListItems[]>([this.#parseItems()]);
  public getListItems = this.#setListItems.asReadonly();

  // private
  #parseItems() {
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAndAddItem(value: IListItems): void {
    localStorage.setItem('@my-list', JSON.stringify([value]));
  }
}
