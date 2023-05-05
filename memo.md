## 新規プロジェクト作成した後の作業

- main.ts に実装するか、stackkblitz 見るまで気が付かなった。
- main.ts に何を実装するかの置き換えに気が付かなかった。

  - bootstrapApplication

- スタンドアロンコンポーネント作成

  ```sh
  ng g c hoge --standalone
  ```

- 複数のコンポーネントの配列リストに入れて、imports セクションで NgModuke と同じ様に宣言

- 個人的には、NgModule で、宣言しているから分かりやすい。
- list 側で、list-item 内包してしまえば、簡素に実装できる

<div class="headline-m">
<a href="https://zenn.dev/lacolaco/books/angular-standalone-components/viewer/directive-composition">ディレクティブの合成</a> 
</div>

TBD

<div class="headline-m">
<a href="https://zenn.dev/lacolaco/books/angular-standalone-components/viewer/unit-test">ユニットテスト</a> 
</div>

TBD
