import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
})
export default class GrandChildComponent {}
