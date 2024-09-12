import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  selectRegion: boolean = false;
  backgroundColor: string = 'white';

  constructor(){

  }

  selectRegionFunc(): void{
    this.selectRegion = !this.selectRegion;
    this.backgroundColor = this.selectRegion ? '#e9ecef' : 'white';


  }

}
