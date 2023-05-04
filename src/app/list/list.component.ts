import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable, filter, of } from 'rxjs';

import { ListItemComponent } from './list-item/list-item.component';
import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [{ provide: ListService, useClass: ListService }],
})
export class ListComponent implements OnInit {
  list$: Observable<List[]> = of([]);
  list: List[] = [];

  readonly service = inject(ListService);

  constructor() {}

  ngOnInit(): void {
    this.list$ = this.service
      .get()
      .pipe(filter((list) => !!list && list.length > 0));
  }
}
