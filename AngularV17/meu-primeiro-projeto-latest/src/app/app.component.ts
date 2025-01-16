import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
    <router-outlet />
    <h1>Curso de Angular</h1>
    <!-- <div class="theme-dark">
      <app-new-component />
    </div> -->
    <!-- <app-template-binding /> -->
    <app-template-variables />
  `,
})
export class AppComponent {}
