import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="relative h-[500px] md:h-[600px] bg-primary">
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {{title}}
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-delay">
            {{subtitle}}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
      <img [src]="backgroundImage" 
           [alt]="imageAlt" 
           class="w-full h-full object-cover">
    </div>
  `
})
export class HeroSectionComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() backgroundImage!: string;
  @Input() imageAlt: string = '';
}