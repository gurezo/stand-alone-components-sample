// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// import { AppComponent } from './app/app.component';

import 'zone.js/dist/zone.js';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
})
export class AppComponent {
  title = 'stand alone components sample';
}

bootstrapApplication(AppComponent).catch((error) => console.error(error));
