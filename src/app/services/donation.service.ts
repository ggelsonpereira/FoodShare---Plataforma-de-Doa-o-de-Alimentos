import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface DonationRequest {
  id?: number;
  name: string;
  items: string[];
  address: string;
  phone: string;
  status: "pending" | "approved" | "completed";
  location?: string;
}

export interface DonationOffer {
  id?: number;
  donorName: string;
  items: string[];
  location: string;
  phone: string;
  available: boolean;
}

@Injectable({
  providedIn: "root",
})
export class DonationService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  // Donation Requests
  createDonationRequest(
    request: DonationRequest,
    p0: {}
  ): Observable<DonationRequest> {
    return this.http.post<DonationRequest>(`${this.apiUrl}/requests`, request);
  }

  getDonationRequests(): Observable<DonationRequest[]> {
    return this.http.get<DonationRequest[]>(`${this.apiUrl}/requests`);
  }

  // Donation Offers
  createDonationOffer(offer: DonationOffer): Observable<DonationOffer> {
    return this.http.post<DonationOffer>(`${this.apiUrl}/offers`, offer);
  }

  getDonationOffers(): Observable<DonationOffer[]> {
    return this.http.get<DonationOffer[]>(`${this.apiUrl}/offers`);
  }
}
