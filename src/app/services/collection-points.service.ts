import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface CollectionPoint {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number];
}

@Injectable({
  providedIn: "root",
})
export class CollectionPointsService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getCollectionPoints(): Observable<CollectionPoint[]> {
    return this.http.get<CollectionPoint[]>(`${this.apiUrl}/collection_points`);
  }
}
