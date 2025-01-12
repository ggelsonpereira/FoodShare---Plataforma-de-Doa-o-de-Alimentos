import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  template: `
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Sobre Nossa Missão</h1>
          <p class="text-xl text-gray-600">
            Conectando corações generosos a quem mais precisa
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1304670598/photo/high-angle-shot-of-unrecognizable-man-and-woman-wearing-protective-gloves-packing-food.jpg?s=2048x2048&w=is&k=20&c=RQtO8_G4aafJOUtnbQfa8C5O0a1KSNg68n1afnFQKms="
              alt="Nossa Missão"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-center">
            <div class="card h-full">
              <h2 class="text-2xl font-bold mb-4">Nossa História</h2>
              <p class="text-gray-600 mb-4">
                Nascemos da necessidade de criar uma ponte entre pessoas que
                querem ajudar e aquelas que precisam de apoio. Nossa plataforma
                facilita esse encontro, tornando o processo de doação mais
                eficiente e acessível.
              </p>
            </div>
          </div>
        </div>

        <div class="card mb-12">
          <h2 class="text-2xl font-bold mb-6">Como Funciona</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <img
                src="https://media.istockphoto.com/id/1385168438/photo/conference-staff-member-handing-out-accreditation-to-attendee.jpg?s=2048x2048&w=is&k=20&c=dF_Wz-3vRUEyItvhLKr91QaZY_VKcTxjcnm9p2sz6WM="
                alt="Cadastro"
                class="w-16 h-16 mx-auto mb-4"
              />
              <h3 class="font-bold mb-2">1. Cadastro</h3>
              <p class="text-gray-600">Faça seu cadastro na plataforma</p>
            </div>
            <div class="text-center">
              <img
                src="https://media.istockphoto.com/id/1478310295/photo/food-donation-volunteering-and-people-with-child-for-sustainability-poverty-help-and.jpg?s=2048x2048&w=is&k=20&c=KX8OOgcW0AaCfYdAx00Yeb8dr7GEewVOGftWphekP1U="
                alt="Doação"
                class="w-16 h-16 mx-auto mb-4"
              />
              <h3 class="font-bold mb-2">2. Doação</h3>
              <p class="text-gray-600">Registre os alimentos disponíveis</p>
            </div>
            <div class="text-center">
              <img
                src="https://media.istockphoto.com/id/1263989444/photo/volunteers-with-donation-box-with-foodstuffs-on-grey-background.jpg?s=2048x2048&w=is&k=20&c=g-xTCaaFIK1tO_6oMd6w_DFarywIravaSDDNxTvCzoQ="
                alt="Entrega"
                class="w-16 h-16 mx-auto mb-4"
              />
              <h3 class="font-bold mb-2">3. Entrega</h3>
              <p class="text-gray-600">Leve ao ponto de coleta mais próximo</p>
            </div>
            <div class="text-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121608450-08d5ee613dd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ajuda"
                class="w-16 h-16 mx-auto mb-4"
              />
              <h3 class="font-bold mb-2">4. Impacto</h3>
              <p class="text-gray-600">Sua doação chega a quem precisa</p>
            </div>
          </div>
        </div>

        <div class="bg-primary text-white rounded-lg p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">
            Faça Parte Dessa Corrente do Bem
          </h2>
          <p class="mb-6">
            Sua contribuição pode fazer a diferença na vida de muitas famílias
          </p>
          <a
            routerLink="/fazer-doacao"
            class="bg-white text-primary px-6 py-3 rounded-lg inline-block hover:bg-opacity-90"
          >
            Começar a Doar
          </a>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
