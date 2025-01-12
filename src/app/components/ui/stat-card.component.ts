import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <div class="bg-white p-6 md:p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
      <div class="text-3xl md:text-4xl font-bold text-primary mb-2">{{value}}</div>
      <div class="text-gray-600">{{label}}</div>
    </div>
  `
})
export class StatCardComponent {
  @Input() value!: string;
  @Input() label!: string;
}