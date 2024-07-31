import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { ViewMapComponent } from './view-map/view-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationViewComponent,
    ViewMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
