import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/IProjects.interface';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: IProjects,
    private _dialogRef: MatDialogRef<DialogProjectsComponent>
  ) {}

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public getData = signal<IProjects | null>(null);

  public closeDialog() {
    return this._dialogRef.close();
  }
}
