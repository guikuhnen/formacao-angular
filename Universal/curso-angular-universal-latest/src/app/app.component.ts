import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { afterNextRender, afterRender, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // localStorage is not available in server-side rendering, so this will only work in the browser.
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('key', 'value');
      console.log(1, localStorage.getItem('key'));
    }

    if (isPlatformServer(this.platformId)) {
      console.log(2, 'This is running on the server side.');      
    }

    // This will run after the next render cycle, useful for DOM manipulations or other tasks that need to wait for the view to be ready.
    afterNextRender(() => {
      console.log(3, 'This runs after the next render cycle.');
    });
    
    // This will run after the current render cycle, useful for tasks that need to be executed after the view is rendered.
    afterRender(() => {
      console.log(4, 'This runs after the current render cycle.');
    });
  }
}
