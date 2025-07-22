import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from '@components/new-component/new-component.component';
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from '@components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from '@components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from '@components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from '@components/signals/signals/signals.component';
import { PaiOuMaeComponent } from '@components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { AngularPipesComponent } from '@components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from '@components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from '@components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from '@components/content/content.component';
import { HostElementsComponent } from '@components/host-elements/host-elements.component';
import { LifeCycleComponent } from '@components/life-cycle/life-cycle.component';
import { environment } from 'environments/environment';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // NewComponent,
    // TemplateBindingComponent,
    // TemplateVariablesComponent,
    // TemplateControlFlowComponent,
    // TemplateDeferrableViewsComponent,
    // SignalsComponent,
    // PaiOuMaeComponent,
    // AngularPipesComponent,
    // TemplateDrivenFormsComponent,
    // ReactiveFormsComponent,
    // ContentComponent,
    // HostElementsComponent,
    // LifeCycleComponent,
    // ConsumeServiceComponent,
  ],
  template: `
    <h1>Curso de Angular</h1>
    <!-- <div class="theme-dark">
      <app-new-component />
    </div> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-views> -->
    <!-- <app-signals /> -->
    <!-- <app-pai-ou-mae /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-reactive-forms /> -->
    <!-- <app-content>
      <header id="header">
        <p>Header</p>
      </header>
      <p text>Text</p>
      <p text>Text</p>
      <footer class="footer">
        <p>Footer</p>
      </footer>
    </app-content> -->
    <!-- <app-host-elements /> -->
    <!-- @if (boolean) { -->
    <!-- <app-life-cycle [myNumber]="number"> -->
    <!-- <app-life-cycle [inputMyNumber]="number()">
      <p #text>Conteúdo do componente</p>
    </app-life-cycle> -->
    <!-- } -->
    <!-- <button (click)="boolean = !boolean">Destroy Component</button> -->
    <h2>Rotas</h2>
    <a href="/curso">Home</a>
    <hr>
    <!-- <app-consume-service /> -->
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor() {
    // console.log(environment.env);
  }

  // public number: number = 1;
  public number = signal(1);
  public boolean: boolean = true;

  //3 - Verifica se entrou dados primeiro, depois inicializa
  ngOnInit(): void {
    //console.log('3 - AppComponent ngOnInit called');
    //// Simulação de mudança de número
    //setTimeout(() => {
    //  this.number = 2;
    //}, 4000);
    //setInterval(() => {
    //  this.number.update(
    //    (oldValue) => {
    //      return oldValue + 1;
    //    }
    //  );
    //}, 1000);
  }
}
