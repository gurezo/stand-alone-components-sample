import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'zone.js/dist/zone.js';

import { ListComponent } from './list/list.component';
import { CompositionNgifDirective } from './shared/directive/composition-ngif.directive';
import { HTagStyleDirective } from './shared/directive/h-tag-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CompositionNgifDirective,
    HTagStyleDirective,
    ListComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand alone components sample';

  isShowH1: boolean = true;
}
