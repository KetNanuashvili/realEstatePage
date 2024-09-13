import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstatesService {

  private baseUrl = 'https://api.real-estate-manager.redberryinternship.ge/api/real-estates';
  private token = '9d0067a1-3e6f-443c-a7a8-76e0360b2cd8';
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {}

  getRealEstates(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.headers });
  }
}
