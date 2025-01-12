import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { HeroSectionComponent } from "../../components/ui/hero-section.component";
import { FeatureCardComponent } from "../../components/ui/feature-card.component";
import { StatCardComponent } from "../../components/ui/stat-card.component";
import { CollectionPointsMapComponent } from "../../components/map/collection-points-map.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterLink,
    HeroSectionComponent,
    FeatureCardComponent,
    StatCardComponent,
    CollectionPointsMapComponent,
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-hero-section
        title="Plataforma de Doação de Alimentos"
        subtitle="Conectando doadores e pessoas necessitadas"
        backgroundImage="https://media.istockphoto.com/id/1449304501/photo/local-market-courier-taking-box-of-fresh-bio-products-to-deliver-food.jpg?s=2048x2048&w=is&k=20&c=sZ4ij9nzhUUHrpi2k6qBkcISIjBMHW89oA3HUirTo4o="
        imageAlt="Doação de Alimentos"
      >
        <a
          routerLink="/fazer-doacao"
          class="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-lg text-lg animate-slide-in inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Quero Doar
        </a>
        <a
          routerLink="/pedir-doacao"
          class="bg-white hover:bg-opacity-90 text-primary px-8 py-3 rounded-lg text-lg animate-slide-in inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Preciso de Ajuda
        </a>
      </app-hero-section>

      <!-- Features Section -->
      <div class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12 animate-fade-in">
          Como Funciona
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <app-feature-card
            iconSrc="https://plus.unsplash.com/premium_photo-1683121608450-08d5ee613dd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Faça sua Doação"
            description="Cadastre os alimentos que você deseja doar"
          >
          </app-feature-card>

          <app-feature-card
            iconSrc="https://media.istockphoto.com/id/641609394/photo/volunteers-serve-people-in-soup-kitchen.jpg?s=2048x2048&w=is&k=20&c=c0INg4ijdY0N0qqX_ucQDIaWmailI4qU5Zq6GXu0QlI="
            title="Encontre Pontos de Coleta"
            description="Localize o ponto de coleta mais próximo"
          >
          </app-feature-card>

          <app-feature-card
            iconSrc="https://media.istockphoto.com/id/1478316218/photo/food-donation-and-man-in-park-with-smile-and-grocery-box-happy-healthy-diet-at-refugee.jpg?s=2048x2048&w=is&k=20&c=ytsHLKHWX1dhfI8pz8uIWXjI1qRtSz6bN4RnR9CJg2U="
            title="Ajude Quem Precisa"
            description="Suas doações fazem a diferença na vida de muitas pessoas"
          >
          </app-feature-card>
        </div>
      </div>

      <!-- Map Section -->
      <div class="container mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold text-center mb-12">Pontos de Coleta</h2>
        <app-collection-points-map></app-collection-points-map>
      </div>

      <!-- Impact Section -->
      <div class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Nosso Impacto</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <app-stat-card
              value="1000+"
              label="Doações Realizadas"
            ></app-stat-card>
            <app-stat-card
              value="500+"
              label="Famílias Atendidas"
            ></app-stat-card>
            <app-stat-card value="20+" label="Pontos de Coleta"></app-stat-card>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
