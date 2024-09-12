import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  selectRegion: boolean = false;
  backgroundColor: string = 'white';

  selectPrice: boolean= false;
  priceBackground: string = 'white'

  selectSpace: boolean = false;
  spaceBackground: string = 'white'

  selectRoom: boolean= false;
  roomBackground: string= 'white'

  constructor(){

  }

  selectRegionFunc(): void{
    this.selectRegion = !this.selectRegion;
    this.backgroundColor = this.selectRegion ? '#e9ecef' : 'white';


  }

  drodownPriceFunc(){
    this.selectPrice= !this.selectPrice;
    this.priceBackground = this.selectPrice ? '#e9ecef' : 'white';
  }

  selectSpaceFunc(){
    this.selectSpace= !this.selectSpace;
    this.spaceBackground = this.selectSpace ? '#e9ecef' : 'white';
  }

  selectRoomFunc(){
    this.selectRoom= !this.selectRoom;
    this.roomBackground = this.selectRoom ? '#e9ecef' : 'white';
  }
}
