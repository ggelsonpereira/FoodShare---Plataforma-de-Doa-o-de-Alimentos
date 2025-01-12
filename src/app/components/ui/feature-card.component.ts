import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
      <img [src]="iconSrc" 
           [alt]="title"
           class="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4">
      <h3 class="text-xl font-bold mb-2">{{title}}</h3>
      <p class="text-gray-600">{{description}}</p>
    </div>
  `
})
export class FeatureCardComponent {
  @Input() iconSrc!: string;
  @Input() title!: string;
  @Input() description!: string;
}