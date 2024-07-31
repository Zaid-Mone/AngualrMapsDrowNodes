import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BingMapsService {
  private apiKey = 'Al_rAdGxqvM6yyObfbhVD_2pUvrxYnM-0wZQfPAkE4PBHA6R3NV6w3mDQG3GfaUa';  // Replace with your Bing Maps API key
  private baseUrl = 'http://dev.virtualearth.net/REST/v1/Locations';

  constructor(private http: HttpClient) { }

  getLocation(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}/${lat},${lon}?includeEntityTypes=Address&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }


  getLocations(coordinates: { lat: number, lon: number }[]): Observable<any[]> {
    const requests = coordinates.map(coord => {
      const url = `${this.baseUrl}/${coord.lat},${coord.lon}?includeEntityTypes=Address&key=${this.apiKey}`;
      return this.http.get<any>(url);
    });
    return forkJoin(requests); // Run all requests in parallel
  }
}