import { Component, OnInit } from '@angular/core';
import { PriceService, Project } from '../../model/price-service.service'; // Ensure the correct path

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'] 
})
export class PriceComponent implements OnInit {
  prices: Project[] = []; 

  constructor(private priceService: PriceService) { }

  ngOnInit(): void {
    this.prices = this.priceService.getProjects(); 
    console.log(this.prices);
    
  }
}
