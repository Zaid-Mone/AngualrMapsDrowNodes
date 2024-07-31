import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BingMapsService } from '../services/bing-maps.service';
declare var Microsoft: any;
@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent  implements OnInit, AfterViewInit {
  coordinates = [
    { lat: 30.0089565104593, lon: -96.40147592749446 },
    { lat: 30.0089565104593, lon: -96.40147592749446 },
    { lat: 30.00816707506009, lon: -96.40231893445505 },
    { lat: 30.00825223091769, lon: -96.4023878838541 },
    { lat: 30.00902853211026, lon: -96.40156457682815 },
    { lat: 30.00910284347163, lon: -96.40164991667503 },
    { lat: 30.00831518904184, lon: -96.40245385607814 },
    { lat: 30.00838599328453, lon: -96.40253431917372 },
    { lat: 30.00914419812806, lon: -96.40172337502844 },
    { lat: 30.00922164932417, lon: -96.40179486369242 },
    { lat: 30.00842453452614, lon: -96.40263606056024 },
    { lat: 30.00850273564942, lon: -96.40271843590854 },
    { lat: 30.00928580351788, lon: -96.40186376354502 },
    { lat: 30.00934747166816, lon: -96.40195175322745 },
    { lat: 30.00856681590673, lon: -96.40278225879955 },
    { lat: 30.00863353547999, lon: -96.40285595234954 },
    { lat: 30.00940486755509, lon: -96.40203071295861 },
    { lat: 30.0094791467296, lon: -96.40212403945372 },
    { lat: 30.00869209545712, lon: -96.4029416342841 },
    { lat: 30.00877964475713, lon: -96.40304564022128 },
    { lat: 30.00953005142775, lon: -96.40219531916816 }
  ];

  map: any;

  constructor(private bingMapsService: BingMapsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadMap();
    this.drawPath();
  }

  loadMap(): void {
    this.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
      credentials: 'Al_rAdGxqvM6yyObfbhVD_2pUvrxYnM-0wZQfPAkE4PBHA6R3NV6w3mDQG3GfaUa',
      center: new Microsoft.Maps.Location(this.coordinates[0].lat, this.coordinates[0].lon),
      mapTypeId: Microsoft.Maps.MapTypeId.aerial,
      zoom: 19
    });
  }

  drawPath(): void {
    const locations = this.coordinates.map(coord => new Microsoft.Maps.Location(coord.lat, coord.lon));

    // Create a polyline
    const line = new Microsoft.Maps.Polyline(locations, {
      strokeColor: 'blue',
      strokeThickness: 3
    });

    // Add the polyline to the map
    this.map.entities.push(line);

    // Optionally, add pushpins for each location
    locations.forEach(location => {
      const pushpin = new Microsoft.Maps.Pushpin(location);
      this.map.entities.push(pushpin);
    });
  }
}