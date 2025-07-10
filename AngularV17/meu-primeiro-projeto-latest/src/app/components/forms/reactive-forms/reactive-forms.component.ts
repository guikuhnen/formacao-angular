import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

function textValidaror(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null; // Valid
    } else {
      return { textValidaror: true }; // Invalid, return an error object
    }
  };
}

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
    const myFavoriteFoods = this.profileForm.get(
      'myFavoriteFoods'
    ) as FormArray;

    const addNewFood = new FormControl<string>(newFood);

    myFavoriteFoods.push(addNewFood);
  }

  #fb = inject(FormBuilder);
  //constructor(private _fb: FormBuilder) {}

  public profileForm: FormGroup = this.#fb.group({
    name: [
      'Guilherme',
      [Validators.required, Validators.minLength(3), textValidaror()],
    ],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['C#'],
    }),
    myFavoriteFoods: this.#fb.array([['Pizza']]),
  });

  public submit() {
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
    }
  }
}
