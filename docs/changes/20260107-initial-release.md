# 2026-01-07: Initial Release - Cart, Checkout, Journal & About Pages

## Implementation Plan

### 11. グローバルヘッダーのカート連携
*   [MODIFY] `src/components/layouts/Header.tsx`: カート内のアイテム数をバッジ表示。

### 12. ジャーナル・Aboutページの実装
*   [NEW] `src/app/(marketing)/journal/page.tsx`: 読み物一覧ページ（モックデータ表示）。
*   [NEW] `src/app/(marketing)/about/page.tsx`: ブランドストーリー、店舗情報。

## Test Specification (Implemented Features)

### 4.4 カート・購入フロー (Cart & Checkout)

| ID | 区分 | 項目 | 条件 | 期待値 |
|:---|:---|:---|:---|:---|
| C-01 | Normal | ゲスト購入 | ログインせずにレジに進む | ゲスト購入用フォーム（またはログイン選択画面）が表示されること |
| C-02 | Normal | ギフト設定 | 「ギフト設定を利用する」をオンにする | 熨斗選択、名入れ入力欄が表示されること |
| C-03 | Error | 必須項目未入力 | 必須項目（住所等）を空で注文確定 | エラーメッセージが表示され、注文が完了しないこと |
| C-04 | Normal | 熨斗プレビュー | 熨斗の種類を選択し、名入れを入力 | プレビュー画面（またはイメージ）に反映されること |
| C-05 | Edge | 最大数量 | カート内商品数を上限（例: 99）にする | 上限エラーが表示される、またはそれ以上追加できないこと |
