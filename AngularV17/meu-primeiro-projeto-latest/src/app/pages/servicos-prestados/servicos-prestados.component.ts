import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicosPrestadosComponent implements OnInit {
  #route = inject(ActivatedRoute);
  #router = inject(Router);

  // Método 3
  public getId = signal<null | string>(null);
  @Input() set id(value: string) {
    this.getId.set(value);
  }

  ngOnInit(): void {
    // Método 1
    console.log('snapshot: ' + this.#route.snapshot.params['id']);

    // Método 2
    this.#route.params.subscribe((params) => {
      console.log(params);
    });

    console.log(this.#route.snapshot.queryParamMap.get('name'));
    console.log(this.#route.snapshot.queryParamMap.get('age'));

    // Router
    setTimeout(() => {
      this.#router.navigate(['/curso'], {
        queryParams: {
          name: 'João',
          age: 30,
        }
      });
    }, 3000);
  }
}
