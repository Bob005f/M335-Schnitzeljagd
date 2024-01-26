import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-fertig',
  templateUrl: './fertig.page.html',
  styleUrls: ['./fertig.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FertigPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
