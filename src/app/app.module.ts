import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegionComponent } from './dataOfcards/region/region.component';
import { RegionServiceService } from './services/region-service.service';
import { PriceComponent } from './dataOfcards/price/price.component';
import { SpaceComponent } from './dataOfcards/space/space.component';
import { RoomNumberComponent } from './dataOfcards/room-number/room-number.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegionComponent,
    PriceComponent,
    SpaceComponent,
    RoomNumberComponent,
    ListPageComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [RegionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
