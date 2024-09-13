import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackandService {
  private apiUrl = 'https://api.real-estate-manager.redberryinternship.ge/api/real-estates';
  private token = '9d0067a1-3e6f-443c-a7a8-76e0360b2cd8';

  constructor(private http: HttpClient) {}

  // Method to send form data
  sendFormData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
      // No need to set 'Content-Type' for FormData, as it's set automatically
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
