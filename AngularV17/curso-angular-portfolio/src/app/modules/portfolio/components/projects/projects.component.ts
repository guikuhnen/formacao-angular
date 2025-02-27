import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Interfaces
import { IProjects } from '../../interfaces/IProjects.interface';
import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProjects): void {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
