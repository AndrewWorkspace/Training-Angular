import {Component, ComponentFactoryResolver, ComponentRef, DoCheck, Injector, OnChanges, OnInit} from '@angular/core';
import {tileLayer, latLng, marker, Marker, LatLngExpression, polygon, circle} from 'leaflet';
import {StorageService} from "../../shared/services/storage.service";
import {MapmarkerComponent} from "./mapmarker/mapmarker.component";



interface MarkerMetaData {
  markerInstance: Marker;
  componentInstance: ComponentRef<MapmarkerComponent>
}



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, DoCheck {


 markers: MarkerMetaData[] = [];
  map;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng(46.973740, 31.969898)
  };

  currentLang: any[];


  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private _storageService: StorageService
  ) {}

  onMapReady(map) {
    this.map = map;

  }

  addMarker() {
    this.currentLang = JSON.parse(this._storageService.getData('Locations'));

    for(const entry of this.currentLang) {

      const position: LatLngExpression = [entry.latitude,entry.longitude]

      const factory = this.resolver.resolveComponentFactory(MapmarkerComponent);

      const component = factory.create(this.injector);

      component.instance.data = entry;

      component.changeDetectorRef.detectChanges();

      let m = marker(position);

      const popupContent = component.location.nativeElement;

      m.bindPopup(popupContent).openPopup();

      m.addTo(this.map);

      this.markers.push({
        markerInstance: m,
        componentInstance: component
      });

    }
  }


  ngOnInit(): void {
    this.addMarker()
    this._storageService.watchStorage().subscribe((data:string) => {
      this.currentLang = JSON.parse(data);
      this.addMarker()
    })
  }



  ngDoCheck() {
    this.markers.forEach(entry => {
      entry.componentInstance.changeDetectorRef.detectChanges();
    })
  }

}
