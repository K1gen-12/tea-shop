# 基本設計書：日本茶ECプラットフォーム構築

## 1. プロジェクト概要 (Project Overview)

* **プロジェクト名:** 日本茶ブランド「深茶」Webサイトリニューアル
* **ビジョン:** 「伝統と現代の融合」。老舗の信頼感を保ちつつ、若い世代や海外ユーザーにも直感的に選べるモダンな購入体験を提供する。
* **目的:**
    * ブランド価値の向上（没入感のあるデザイン）
    * 選びにくさの解消（味の可視化・チャート機能）
    * ギフト需要の取り込み（詳細な熨斗・ラッピング対応）

## 2. 技術スタック (Tech Stack)

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (設定は `docs/design-system.xml` に完全準拠)
* **State Management:** React Context or Zustand (カート管理用)
* **CMS:** MicroCMS or Supabase (商品・記事管理)
* **Infrastructure:** Vercel or Cloudflare Pages

## 3. サイトマップ構成 (Site Structure)

1.  **HOME (トップページ)**
    * ファーストビュー（動画/画像 + 縦書きキャッチコピー）
    * 季節のおすすめ（新茶・水出しなど）
    * 読み物ピックアップ
2.  **PRODUCTS (商品一覧・検索)**
    * カテゴリ別（煎茶、玉露、抹茶、茶器）
    * **味覚チャート検索**（甘み・渋み・旨み・香り）
    * シーン別検索（朝、休憩、贈り物）
3.  **PRODUCT DETAIL (商品詳細)**
    * 商品画像ギャラリー
    * 味覚レーダーチャート表示
    * 淹れ方ガイド
    * 関連商品（ペアリング菓子など）
4.  **JOURNAL (読み物)**
    * おいしい淹れ方
    * 茶園の様子
    * スタッフのペアリング日記
5.  **ABOUT (店舗紹介)**
    * 歴史・創業ストーリー
    * こだわり
6.  **CART / CHECKOUT (購入フロー)**
    * ゲスト購入対応
    * **ギフト設定**（熨斗の種類、名入れ、手提げ袋の有無）

## 4. 詳細機能要件 (Functional Requirements)

### A. UI/UX・演出 (Visuals)
* **デザインシステムの適用:**
    * 配色、フォント、余白は `docs/design-system.xml` を厳守する。
* **縦書きの実装 (Vertical Text):**
    * ヒーローセクションのキャッチコピーや、セクション見出し（h2）には CSS `writing-mode: vertical-rl` を使用し、和の美意識を表現する。
* **マイクロインタラクション:**
    * ボタンホバー時：背景色がゆっくり満ちる、または枠線が動くなど、急かさないアニメーション（Duration 300ms~500ms）。
    * スクロール：画像が表示される際、ふわっと浮き上がるパララックス効果。

### B. 商品選びの機能 (Product Selection)
* **味覚レーダーチャートコンポーネント:**
    * 各お茶の「甘み」「渋み」「旨み」「香り」「色（水色）」を5段階評価でチャート化して表示する。
    * `Recharts` や `Chart.js` を使用し、デザインシステムに馴染む配色（線は細く、色は濃茶など）で実装する。

### C. ギフト対応 (Gifting)
* **熨斗（のし）セレクター:**
    * 「御祝」「内祝」「御供」などをプルダウンではなく、見やすいカード形式で選択させる。
    * 「名入れ」入力欄を動的に表示する。

## 5. データモデル設計 (Data Schema)

### Product (商品)
```json
{
  "id": "uuid",
  "name": "特選 煎茶 [山霧]",
  "price": 1200,
  "description": "朝霧に包まれた茶畑で育った...",
  "category": "sencha",
  "tags": ["morning", "refresh"],
  "taste_profile": {
    "sweetness": 4,
    "bitterness": 2,
    "umami": 5,
    "fragrance": 4
  },
  "images": ["url1", "url2"],
  "stock_status": "in_stock"
}
```

## Article (記事)
```JSON

{
  "id": "uuid",
  "title": "新茶のおいしい淹れ方",
  "content": "リッチテキスト...",
  "published_at": "2024-05-01",
  "related_products": ["product_id_A", "product_id_B"]
}
```

## 6. 非機能要件 (Non-Functional Requirements)
Performance: Core Web Vitals (LCP, CLS) を重視。画像は next/image で最適化。

Accessibility: 背景色と文字色のコントラスト比 4.5:1 以上を確保。スクリーンリーダー対応。

SEO: 各ページに適切な meta tags と構造化データ（Product, Article）を埋め込む。