import { Component } from '@angular/core';
import { RealEstatesService } from '../../services/real-estates.service';

@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styleUrl: './agent-page.component.css'
})
export class AgentPageComponent {
  result: any;
  data: any[] = [];

  constructor(private realEstateService: RealEstatesService) {}

  ngOnInit(): void {
    this.realEstateService.getRealEstates().subscribe(
      data => {
        this.result = data; 
        this.data = data.map((item: any) => {
          console.log(item);
          return item; 
        
         
        });
       
      
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
