import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegionComponent } from './dataOfcards/region/region.component';
import { RegionServiceService } from './services/region-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [RegionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
