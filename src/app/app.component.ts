import 'zone.js/dist/zone.js';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { ListComponent } from './list/list.component';
// import { ListItemComponent } from './list-item/list-item.component';

// const componentList = [ListComponent, ListItemComponent] as const;
import { ListModule } from './list/list.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'stand alone components sample';
}
