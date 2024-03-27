import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export default class ParentComponent {}
