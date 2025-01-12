import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DonationService } from "../../services/donation.service";

@Component({
  selector: "app-request-donation",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Solicitar Doação</h1>

        <form [formGroup]="requestForm" (ngSubmit)="onSubmit()" class="card">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Nome</label>
            <input type="text" formControlName="name" class="input-field" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Itens Necessários</label>
            <div class="flex gap-2 mb-2">
              <input
                type="text"
                [(ngModel)]="newItem"
                [ngModelOptions]="{ standalone: true }"
                class="input-field"
                placeholder="Digite um item"
              />
              <button
                type="button"
                (click)="addItem()"
                class="px-4 py-2 bg-secondary text-white rounded-lg"
              >
                Adicionar
              </button>
            </div>
            <div *ngIf="items.length > 0" class="mt-2">
              <ul class="space-y-2">
                <li
                  *ngFor="let item of items; let i = index"
                  class="flex justify-between items-center bg-gray-100 p-2 rounded"
                >
                  {{ item }}
                  <button
                    type="button"
                    (click)="removeItem(i)"
                    class="text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Endereço</label>
            <input type="text" formControlName="address" class="input-field" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Telefone</label>
            <input type="tel" formControlName="phone" class="input-field" />
          </div>

          <button type="submit" class="btn-primary w-full">
            Enviar Solicitação
          </button>
        </form>
      </div>
    </div>
  `,
})
export class RequestDonationComponent {
  requestForm: FormGroup;
  items: string[] = [];
  newItem: string = "";

  constructor(
    private fb: FormBuilder,
    private donationService: DonationService
  ) {
    this.requestForm = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
    });
  }

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = "";
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  onSubmit() {
    if (this.requestForm.valid && this.items.length > 0) {
      const donationRequest = {
        ...this.requestForm.value,
        items: this.items,
        status: "pending",
      };

      this.donationService
        .createDonationRequest(donationRequest, {})
        .subscribe({
          next: () => {
            alert("Solicitação enviada com sucesso!");
            this.requestForm.reset();
            this.items = [];
          },
          error: () => alert("Erro ao enviar solicitação. Tente novamente."),
        });
    }
  }
}
