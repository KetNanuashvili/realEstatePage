import { Component, OnInit } from '@angular/core';
import { RegionServiceService } from '../../services/region-service.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  data: any[] = []; 
  result: any; 

  constructor(private regionService: RegionServiceService) { }

  ngOnInit(): void {
    // Fetching the data from the service
    this.regionService.getData().subscribe(
      data => {
        this.result = data;
     
        this.data = data.map(item => item.name); 
        
 
        console.log('Extracted Names:', this.data);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
