import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { MakeDonationComponent } from "./pages/make-donation/make-donation.component";
import { RequestDonationComponent } from "./pages/request-donation/request-donation.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre", component: AboutComponent },
  { path: "fazer-doacao", component: MakeDonationComponent },
  { path: "pedir-doacao", component: RequestDonationComponent },
];
