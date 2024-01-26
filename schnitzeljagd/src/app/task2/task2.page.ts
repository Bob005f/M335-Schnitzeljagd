import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { RouterLink } from '@angular/router';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class Task2Page implements OnInit {
  Supported: boolean = true;
  result?: any;
  CorrectQRCodescanned: boolean = false;
  WrongQRCodeScanned: boolean = false;
  barcodes: Barcode[] = [];
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async startScan() {
    if ((await BarcodeScanner.scan()).barcodes[0].rawValue == 'M335@ICT-BZ') {
      this.CorrectQRCodescanned = true;
      await Haptics.vibrate({ duration: 10 });
    }
    if (
      (await BarcodeScanner.scan()).barcodes[0].rawValue == 'nicht M335@ICT-BZ'
    ) {
      this.WrongQRCodeScanned = true;
      await Haptics.vibrate({ duration: 10 });
    }
  }
  async reqPermission(): Promise<boolean> {
    const { camera: CameraPermissionState } =
      await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'Limited';
  }
}
