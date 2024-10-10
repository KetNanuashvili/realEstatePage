import { Component, Input, OnInit } from '@angular/core';
import { PriceService, Project } from '../../model/price-service.service'; // Ensure the correct path
import { RealEstatesService } from '../../services/real-estates.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'] 
})
export class PriceComponent implements OnInit {
  prices: Project[] = []; 
  @Input() backgroundColor: string = ' #FFFFFF';
  result: any;
  data: any[] = [];
  constructor(private priceService: PriceService, private realEstatesService: RealEstatesService) { }

  ngOnInit(): void {
    this.prices = this.priceService.getProjects(); 
    console.log(this.prices);
    

    this.realEstatesService.getRealEstates().subscribe(
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
