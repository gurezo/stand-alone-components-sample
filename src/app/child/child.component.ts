import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export default class ChildComponent {}
