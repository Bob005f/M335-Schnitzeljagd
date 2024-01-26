import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { RouterModule } from '@angular/router';
import {
  BarcodeScanner,
  GoogleBarcodeScannerModuleInstallState,
} from '@capacitor-mlkit/barcode-scanning';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButton, RouterModule],
})
export class Task1Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  async getPermissions() {
    // Anfrage für GPS-Berechtigung
    await Geolocation.requestPermissions();

    // Anfrage für Kamera-Berechtigung
    await BarcodeScanner.requestPermissions();
  }
}
