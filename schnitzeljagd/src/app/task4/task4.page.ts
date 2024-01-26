import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.page.html',
  styleUrls: ['./task4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, IonButton, RouterModule],
})
export class Task4Page implements OnInit, OnDestroy {
  timeElapsed: number = 0;
  private intervalId: any;
  isCharging: boolean | undefined = false;

  constructor(private router: Router) {}
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
    this.intervalId = setInterval(async () => {
      const batteryInfo = await Device.getBatteryInfo();
      this.isCharging = batteryInfo.isCharging;
    }, 1000); // Überprüft jede Sekunde
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  private startTimer() {
    this.intervalId = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }
}
