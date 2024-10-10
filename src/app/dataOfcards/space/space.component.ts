import { Component, OnInit } from '@angular/core';
import { Space, SpaceService } from '../../model/space.service';
import { RealEstatesService } from '../../services/real-estates.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent implements OnInit {
  prices: Space[] = []; 
  result: any;
  data: any[] = [];

  constructor(private SpaceService: SpaceService, private realEstateService: RealEstatesService) { }

  ngOnInit(): void {
    this.prices = this.SpaceService.getProjects(); 
    console.log(this.prices);
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
