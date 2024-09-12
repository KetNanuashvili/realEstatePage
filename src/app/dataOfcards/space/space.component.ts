import { Component, OnInit } from '@angular/core';
import { Space, SpaceService } from '../../model/space.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrl: './space.component.css'
})
export class SpaceComponent implements OnInit {
  prices: Space[] = []; 

  constructor(private SpaceService: SpaceService) { }

  ngOnInit(): void {
    this.prices = this.SpaceService.getProjects(); 
    console.log(this.prices);
    
  }
}
