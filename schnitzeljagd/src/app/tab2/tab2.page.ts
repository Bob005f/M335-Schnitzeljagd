import { Component } from '@angular/core';
import { Motion } from '@capacitor/motion';
import { RouterModule } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NgForm } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonButton,
    RouterModule,
    NgIf,
  ],
})
export class Tab2Page {
  public isUpsideDown = false;

  constructor() {
    this.watchDeviceOrientation();
  }
  async watchDeviceOrientation() {
    await Motion.addListener('accel', (event) => {
      if (event.acceleration.z > 9) {
        this.isUpsideDown = true;
      }
    });
  }
}
