import { Component, OnInit } from '@angular/core';
import { RealEstatesService } from '../../services/real-estates.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {
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
