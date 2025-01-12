import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";
import { CommonModule } from "@angular/common";
import {
  faHome,
  faInfoCircle,
  faDonate,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconProp } from "@fortawesome/angular-fontawesome/types";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, FontAwesomeModule],
  template: `
    <nav class="bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="text-xl font-bold flex items-center">
            <img
              src="https://www.svgrepo.com/show/427342/food-ice.svg"
              alt="FoodShare"
              class="h-8 w-8 mr-2"
            />
            FoodShare
          </a>

          <!-- Mobile menu button -->
          <button
            (click)="toggleMenu()"
            class="md:hidden p-2 rounded-md hover:bg-opacity-20 transition-all"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                *ngIf="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                *ngIf="isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Desktop menu -->
          <div class="hidden md:flex space-x-4">
            <a
              routerLink="/"
              routerLinkActive="bg-opacity-30"
              class="px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
            >
              <fa-icon [icon]="faHome"></fa-icon> Home
            </a>
            <a
              routerLink="/sobre"
              routerLinkActive="bg-opacity-30"
              class="px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
            >
              <fa-icon [icon]="faInfoCircle"></fa-icon> Sobre
            </a>
            <a
              routerLink="/fazer-doacao"
              routerLinkActive="bg-opacity-30"
              class="px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
            >
              <fa-icon [icon]="faDonate"></fa-icon> Fazer Doação
            </a>
            <a
              routerLink="/pedir-doacao"
              routerLinkActive="bg-opacity-30"
              class="px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
            >
              <fa-icon [icon]="faHandHoldingHeart"></fa-icon> Pedir Doação
            </a>
          </div>

          <!-- Mobile menu -->
          <div *ngIf="isMenuOpen" class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                routerLink="/"
                routerLinkActive="bg-opacity-30"
                class="block px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
              >
                <fa-icon [icon]="faHome"></fa-icon> Home
              </a>
              <a
                routerLink="/sobre"
                routerLinkActive="bg-opacity-30"
                class="block px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
              >
                <fa-icon [icon]="faInfoCircle"></fa-icon> Sobre
              </a>
              <a
                routerLink="/fazer-doacao"
                routerLinkActive="bg-opacity-30"
                class="block px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
              >
                <fa-icon [icon]="faDonate"></fa-icon> Fazer Doação
              </a>
              <a
                routerLink="/pedir-doacao"
                routerLinkActive="bg-opacity-30"
                class="block px-3 py-2 rounded-md hover:bg-opacity-20 transition-all"
              >
                <fa-icon [icon]="faHandHoldingHeart"></fa-icon> Pedir Doação
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  faHandHoldingHeart: IconProp = faHandHoldingHeart;
  faDonate: IconProp = faDonate;
  faInfoCircle: IconProp = faInfoCircle;
  faHome: IconProp = faHome;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
