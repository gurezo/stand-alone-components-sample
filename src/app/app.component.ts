import 'zone.js/dist/zone.js';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HttpClient],
})
export class AppComponent {
  title = 'stand alone components sample';
}
