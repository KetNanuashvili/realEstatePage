import { Component, OnInit } from '@angular/core';
import { RealEstatesService } from '../../services/real-estates.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-page',
  templateUrl: './agent-page.component.html',
  styleUrls: ['./agent-page.component.css']
})
export class AgentPageComponent implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private realEstateService: RealEstatesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.realEstateService.getRealEstateById(id).subscribe(
      data => {
        this.data = data;
        console.log(data); 
        console.log(this.data.id);
        
      },
      error => {
        console.error('Error fetching real estate data by ID', error);
      }
    );
  }
}
