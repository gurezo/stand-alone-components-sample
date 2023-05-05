import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {}
