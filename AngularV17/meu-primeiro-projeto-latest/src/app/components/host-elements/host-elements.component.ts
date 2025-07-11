import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  // Versões atuais
  // host: {
  //   role: 'button',
  //   '[attr.class]': 'class',
  //   '(document:keypress)': 'updateHostListener($event)',
  //   '(click)': 'updateClick()',
  // }
})
export class HostElementsComponent {
  // Versões antigas
  @HostBinding('attr.class')
  public class = 'host-element';

  @HostListener('document:keypress', ['$event'])
  public updateHostListener(event: KeyboardEvent): void {
    console.log('Host element key pressed:', event.key);
  }

  @HostListener('click')
  public updateClick(): void {
    console.log('Host element clicked');
  }
}
