import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.page.html',
  styleUrls: ['./task3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Task3Page implements OnInit {
  private targetLocation = { latitude: 47.071995, longitude: 8.348945 };
  protected withinRange = false;

  constructor() {}

  ngOnInit() {}
  async checkLocation() {
    const position = await Geolocation.getCurrentPosition();
    const distance = this.getDistanceFromLatLonInKm({
      lat1: position.coords.latitude,
      lon1: position.coords.longitude,
      lat2: this.targetLocation.latitude,
      lon2: this.targetLocation.longitude,
    });

    const radius = 0.05; // Radius in Kilometern, z.B. 50 Meter
    this.withinRange = distance <= radius;
  }

  private getDistanceFromLatLonInKm({
    lat1,
    lon1,
    lat2,
    lon2,
  }: {
    lat1: any;
    lon1: any;
    lat2: any;
    lon2: any;
  }) {
    var R = 6371; // Radius der Erde in Kilometern
    var dLat = this.deg2rad({ deg: lat2 - lat1 });
    var dLon = this.deg2rad({ deg: lon2 - lon1 });
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad({ deg: lat1 })) *
        Math.cos(this.deg2rad({ deg: lat2 })) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distanz in Kilometern
    return d;
  }

  private deg2rad({ deg }: { deg: any }) {
    return deg * (Math.PI / 180);
  }
}
