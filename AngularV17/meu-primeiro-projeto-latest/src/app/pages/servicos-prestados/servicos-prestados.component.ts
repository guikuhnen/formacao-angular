import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicosPrestadosComponent implements OnInit {
  #route = inject(ActivatedRoute);

  public getId = signal<null | string>(null);
  @Input() set id(value: string) {
    this.getId.set(value);
  }

  ngOnInit(): void {
    console.log('snapshot: ' + this.#route.snapshot.params['id']);

    this.#route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
