import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-custom-button',
  template: `<button [style.color]="color">{{ body }}</button>`,
  styles: [],
})
export class CustomButtonComponent {
  @Input() color: string = '#000';
  @Input() body: string = 'Hello world';
}
