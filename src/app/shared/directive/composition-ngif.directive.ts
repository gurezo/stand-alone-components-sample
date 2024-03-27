import { NgIf } from '@angular/common';
import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCompositionNgif]',
  standalone: true,
  // `NgIf` ディレクティブを合成する
  hostDirectives: [NgIf],
})
export class CompositionNgifDirective implements OnChanges {
  // 自身と同じ要素に付与された `NgIf` ディレクティブのインスタンスを取得する
  readonly #ngIf = inject(NgIf, { self: true });

  @Input('appCompositionNgif') isShowH1: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.#ngIf.ngIf = this.isShowH1;
  }
}
