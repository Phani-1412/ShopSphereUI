import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LogisticsService {
 
  private api = 'http://localhost:5105';
 
  constructor(private http: HttpClient) { }
 
  // GET — needs a new endpoint in your backend (see note below)
  getAllShipments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/api/shipment/all`);
  }
 
  // PUT /api/shipment/update-status/{shipmentId}
  updateShipmentStatus(shipmentId: number, status: string): Observable<any> {
    return this.http.put(`${this.api}/api/shipment/update-status/${shipmentId}`, { status });
  }
}
 