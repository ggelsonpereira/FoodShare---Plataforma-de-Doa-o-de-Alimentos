import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <ng-content></ng-content>
    </div>
  `
})
export class CardComponent {}