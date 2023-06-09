import 'zone.js/dist/zone.js';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListComponent } from './list/list.component';
import { HTagStyleDirective } from './h-tag-style.directive';
import { CompositionNgifDirective } from './composition-ngif.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HTagStyleDirective,
    CompositionNgifDirective,
    ListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand alone components sample';

  isShowH1: boolean = true;
}
