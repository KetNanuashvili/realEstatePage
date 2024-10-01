import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  private apiUrl = 'https://api.real-estate-manager.redberryinternship.ge/api/agents';
  private token = '9d0067a1-3e6f-443c-a7a8-76e0360b2cd8';

  constructor(private http: HttpClient) {}

  // Add the getData() method
  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json'
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }

  // Other methods, like sendFormData(), can also be here
}
