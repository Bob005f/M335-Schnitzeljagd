import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Haptics } from '@capacitor/haptics';
import { RouterLink } from '@angular/router';
import { camera } from 'ionicons/icons';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.page.html',
  styleUrls: ['./task2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, IonButton],
})
export class Task2Page implements OnInit {
  Supported: boolean = true;
  result?: any;
  CorrectQRCodescanned: boolean = false;
  WrongQRCodeScanned: boolean = false;
  barcodes: Barcode[] = [];
  timeElapsed: number = 0;
  private intervalId: any;

  constructor(
    private alertController: AlertController,
    private router: Router,
  ) {}
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

  async ngOnInit() {
    this.startTimer();
    if (this.CorrectQRCodescanned) {
      await Haptics.vibrate({ duration: 500 });
    }
  }

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

  private startTimer() {
    this.intervalId = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }
}
