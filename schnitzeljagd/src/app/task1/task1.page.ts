import { Component } from '@angular/core';
import { Motion } from '@capacitor/motion';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-task1',
  templateUrl: 'task1.page.html',
  styleUrls: ['task1.page.scss'],
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
    IonicModule,
  ],
})
export class Task1Page {
  public isUpsideDown = false;
  timeElapsed: number = 0;
  private intervalId: any;
  constructor(private router: Router) {
    this.watchDeviceOrientation();
  }
  public alertButtons = [
    {
      text: 'Nein',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Ja',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/tabs']);
      },
    },
  ];

  async watchDeviceOrientation() {
    await Motion.addListener('accel', (event) => {
      if (event.acceleration.z > 9) {
        this.isUpsideDown = true;
      }
    });
  }
  private startTimer() {
    this.intervalId = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }
}
