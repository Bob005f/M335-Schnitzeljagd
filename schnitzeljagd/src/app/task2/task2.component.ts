import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss'],
})
export class Task2Component implements OnInit {
  public scanResult: string = '';
  public correctCodeScanned = false;
  public incorrectCodeScanned = false;
  public scanning = false;

  constructor() {}

  ngOnInit() {}
  async startScan() {
    this.scanning = true;
    BarcodeScanner.hideBackground(); // Wichtig, um die Kameraansicht zu ermöglichen
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.scanResult = result.content;
      this.checkContent(this.scanResult);
    }
    this.scanning = false;
  }

  stopScan() {
    BarcodeScanner.stopScan();
    this.scanning = false;
  }

  checkContent(scannedContent: string) {
    if (scannedContent === 'ict@bz.ch') {
      this.correctCodeScanned = true;
      this.incorrectCodeScanned = false;
    } else if (scannedContent === 'nicht ict@bz.ch') {
      this.correctCodeScanned = false;
      this.incorrectCodeScanned = true;
    } else {
      this.correctCodeScanned = false;
      this.incorrectCodeScanned = false;
      console.log('Unbekannter QR-Code.');
    }
  }
}
