import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Software Developer',
        p: 'Radix | Set 2024 - Atualmente',
      },
      text: '<p>...</p>',
    },
    {
      summary: {
        strong: 'Software Developer',
        p: 'Senior Sistemas | Jan 2024 - Ago 2024',
      },
      text: '<p>...</p>',
    },
    {
      summary: {
        strong: 'Coordenador de desenvolvimento',
        p: 'NDD - Tech | Out 2020 - Nov 2023',
      },
      text: '<p>...</p>',
    },
  ]);
}
