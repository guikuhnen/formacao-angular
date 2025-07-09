import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  //public name = new FormControl<string>('');

  //public updateName() {
  //this.name.setValue('Novo nome');
  //}

  // public profileForm = new FormGroup({
  //   name: new FormControl<string>('Guilherme'),
  //   myStacks: new FormGroup({
  //     front: new FormControl<string>('Angular'),
  //     back: new FormControl<string>('C#'),
  //   }),
  //   myFavoriteFoods: new FormArray([
  //     new FormControl<string>('Pizza'),
  //   ]),
  // });

  public update() {
    this.profileForm.patchValue({
      name: 'Guilherme Kuhnen',
      myStacks: {
        front: 'Angular 17',
        back: 'C# 9',
      },
    });
  }

  public addFood(newFood: string) {
   const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;

   const addNewFood = new FormControl<string>(newFood);

   myFavoriteFoods.push(addNewFood);
  }

  #fb = inject(FormBuilder);
  //constructor(private _fb: FormBuilder) {}

  public profileForm: FormGroup = this.#fb.group({
    name: ['Guilherme'],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['C#'],
    }),
    myFavoriteFoods: this.#fb.array([['Pizza']]),
  });
}
