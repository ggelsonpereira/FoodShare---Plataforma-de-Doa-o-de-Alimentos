import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as L from "leaflet";
import { CollectionPointsService } from "../../services/collection-points.service";

@Component({
  selector: "app-collection-points-map",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <div id="map" class="h-[400px] md:h-[500px] rounded-lg shadow-lg"></div>
      <div
        class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md z-[1000]"
      >
        <h3 class="font-bold mb-2">Pontos de Coleta</h3>
        <p class="text-sm text-gray-600">{{ pointCount }} locais disponíveis</p>
      </div>
    </div>
  `,
  styles: [``],
})
export class CollectionPointsMapComponent implements OnInit {
  private map!: L.Map;
  pointCount: number = 0;

  constructor(private collectionPointsService: CollectionPointsService) {}

  ngOnInit() {
    this.initializeMap();
    this.loadCollectionPoints();
  }

  private initializeMap() {
    this.map = L.map("map").setView([-23.55052, -46.633308], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);
  }

  private loadCollectionPoints() {
    this.collectionPointsService.getCollectionPoints().subscribe((points) => {
      this.pointCount = points.length;
      points.forEach((point) => {
        const marker = L.marker(point.coordinates as [number, number])
          .bindPopup(
            `
            <div class="p-2">
              <h3 class="font-bold">${point.name}</h3>
              <p class="text-sm">${point.address}</p>
            </div>
          `
          )
          .addTo(this.map);
      });
    });
  }
}
