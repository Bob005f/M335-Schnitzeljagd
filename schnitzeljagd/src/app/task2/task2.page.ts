import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
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
  standalone: true,
})
export class Task2Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  async startScan() {
    // The camera is visible behind the WebView, so that you can customize the UI in the WebView.
    // However, this means that you have to hide all elements that should not be visible.
    // You can find an example in our demo repository.
    // In this case we set a class `barcode-scanner-active`, which then contains certain CSS rules for our app.
    document.querySelector('body')?.classList.add('barcode-scanner-active');

    // Start the barcode scanner
    await BarcodeScanner.startScan();
  }
}
