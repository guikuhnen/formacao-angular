import { Component, signal } from '@angular/core';

// Interfaces
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/teste.png',
      alt: 'Projeto Teste',
      title: 'Projeto Teste',
      width: '100px',
      height: '51px',
      description:
        '<p>Projeto desenvolvido para aprimorar habilidades em desenvolvimento web.<p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://google.com.br',
        },
      ],
    },
  ]);
}
