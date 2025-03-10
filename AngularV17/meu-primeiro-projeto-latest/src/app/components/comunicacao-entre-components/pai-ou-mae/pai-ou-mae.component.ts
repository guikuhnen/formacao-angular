import { Component, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pai-ou-mae',
  standalone: true,
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.scss',
})
export class PaiOuMaeComponent {
  public name = signal('Guilherme Kuhnen');

  public outputName = signal('Output: sem valor');
}
