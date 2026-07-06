# ShijimiWORKs Interior Design Consulting — Portfolio HP 006

住宅・店舗・オフィスの空間デザインをトータルで提案する、デザインコンサルタント会社
「ShijimiWORKs」の会社紹介・集客用サイト（架空）です。
インテリア・壁紙・配色・家具配置・照明計画までを一貫して整える
「空間デザインコンサルティング」の相談につなげることを目的としています。

- **サイト名**: ShijimiWORKs Interior Design Consulting
- **管理番号**: 006
- **サイト種別**: デザインコンサルタント会社HP（会社紹介・集客LP）
- **GitHubリポジトリ**: https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP006

---

## サイト概要

施工会社ではなく、空間の方向性・色・素材・見せ方を整える「コンサルティング会社」として表現した、
1ページ完結型（縦長スクロール）の集客ランディングページです。
清潔感のある配色とインテリア雑誌のような余白で、個人宅・店舗・オフィスの
幅広い相談を受けられる印象をつくり、Contactセクションへ自然に導きます。

## 使用技術

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**（strict モード）
- **CSS**: `app/globals.css`（デザインシステムをCSS変数で一元管理）
- スクロール演出: `IntersectionObserver`（`components/Reveal.tsx`、`prefers-reduced-motion` に配慮）
- レスポンシブ対応（PC / タブレット / スマホ 375px）
- 画像最適化: `next/image`
- アイコン: 自作インラインSVG（Lucide風ラインアイコン）

## セクション構成

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Hero | キャッチコピー、サブコピー、カラーパレット装飾、CTA（空間デザインを相談する / 事例を見る） |
| 2 | Concept | 空間の印象づくりに対する考え方 |
| 3 | Service | 6サービス（Interior / Color / Wallpaper / Furniture / Lighting / Office・Shop） |
| 4 | Works | 架空のコンサルティング事例6件（対象空間・担当範囲・説明・提案タグ） |
| 5 | Consulting Menu | 3つの相談メニュー（Personal / Shop / Office） |
| 6 | Before / After | 改善イメージ3事例（Before/After 画像 + 説明） |
| 7 | Flow | 相談から提案までの8ステップ |
| 8 | Price | 料金の目安 |
| 9 | FAQ | よくあるご質問8件（アコーディオン） |
| 10 | Contact | 問い合わせフォームUI（ダミー完了表示、実送信なし） |

グローバルナビはページ内アンカーリンク（Concept / Service / Works / Consulting / Flow / Price / FAQ / Contact）。

## コンポーネント構成

```
app/
  layout.tsx      … メタデータ・OGP・全体レイアウト
  page.tsx        … 各セクションの組み立て
  globals.css     … デザインシステム / 全スタイル
  icon.svg        … ファビコン（自作SVG）
components/
  Header / Hero / Concept / Service / Works / ConsultingMenu /
  BeforeAfter / Flow / Price / FAQ / Contact / Footer / Reveal
public/
  og.svg          … OGP画像（自作SVG）
```

---

## 画像・イラスト素材の出典と商用利用可否

### 写真素材（Unsplash）

Hero・Concept・Works（6件）・Before/After（6枚）の写真は **Unsplash** の素材を使用しています。

- **出典サイト**: https://unsplash.com/
- **ライセンス**: Unsplash License
- **ライセンス確認先URL**: https://unsplash.com/license
- **商用利用**: ✅ 可（無料・商用利用可・帰属表示は任意）

使用画像URL一覧：

| 用途 | 画像URL |
|------|---------|
| Hero（明るいリビング） | https://images.unsplash.com/photo-1618221195710-dd6b41faaea6 |
| Concept 1（グリーンの居室） | https://images.unsplash.com/photo-1616486338812-3dadae4b4ace |
| Concept 2（ワークスペース） | https://images.unsplash.com/photo-1524758631624-e2822e304c36 |
| Concept 3（素材サンプル） | https://images.unsplash.com/photo-1513694203232-719a280e022f |
| Works 1（美容室） | https://images.unsplash.com/photo-1560066984-138dadb4c035 |
| Works 2（在宅書斎） | https://images.unsplash.com/photo-1524758631624-e2822e304c36 |
| Works 3（カフェ） | https://images.unsplash.com/photo-1554118811-1e0d58224f24 |
| Works 4（オフィス） | https://images.unsplash.com/photo-1497366216548-37526070297c |
| Works 5（リビング） | https://images.unsplash.com/photo-1567016432779-094069958ea5 |
| Works 6（雑貨店） | https://images.unsplash.com/photo-1441984904996-e0b6ba687e04 |
| Before/After 01 Before | https://images.unsplash.com/photo-1497215728101-856f4ea42174 |
| Before/After 01 After | https://images.unsplash.com/photo-1524758631624-e2822e304c36 |
| Before/After 02 Before | https://images.unsplash.com/photo-1559925393-8be0ec4767c8 |
| Before/After 02 After | https://images.unsplash.com/photo-1445116572660-236099ec97a0 |
| Before/After 03 Before | https://images.unsplash.com/photo-1497366216548-37526070297c |
| Before/After 03 After | https://images.unsplash.com/photo-1568992687947-868a62a9f521 |

> Unsplash License は商用・非商用ともに無料で利用でき、帰属表示は任意です。
> 空間・インテリアが主題の写真を選定し、人物・商標・アート作品が主題となる写真は避けています。
> Before/After は施工写真ではなく、改善イメージを伝えるための「類似イメージ写真」です。

### 自作素材（第三者素材なし）

以下は第三者素材を使わず、CSSグラデーション・SVGで自作しているため **商用利用可**（著作権上の懸念なし）です。

- Heroの背景・カラーパレット装飾（CSS）
- Serviceのラインアイコン（自作インラインSVG）
- OGP画像 `public/og.svg`（自作SVG）
- ファビコン `app/icon.svg`（自作SVG）
- Consulting Menu カードの配色グラデーション、各種装飾（CSS）

### 素材利用に関する確認結果

- 参考サイト（siropcolor.com）の画像・写真・文章・ロゴ・固有名詞は一切使用していません。
- 使用素材はすべて商用利用可能な無料素材、または自作素材です。
- ライセンスが曖昧な素材は使用していません。

---

## セットアップ

### 必要環境
- Node.js 18.17 以上（推奨: 20 以上）

### インストール
```bash
npm install
```

### 起動方法（開発サーバー）
```bash
npm run dev
# http://localhost:3000
```

### 型チェック
```bash
npm run typecheck
```

### ビルド方法
```bash
npm run build
npm run start   # 本番サーバー起動
```

Windows で `npm` が使えない場合は `npm.cmd` に読み替えてください。

---

## アクセシビリティ / SEO

- 適切な見出し階層（h1 → h2 → h3）
- 画像の `alt` 属性、装飾要素は `aria-hidden`
- Before/After は色（緑）だけでなく「Before」「After」ラベルのテキストでも区別
- フォームは `label` と入力を紐付け、必須項目を明示
- キーボード操作対応、`:focus-visible` のフォーカスリング、本文スキップリンク
- `prefers-reduced-motion` でアニメーションを無効化
- `title` / `description` / OGP / Twitter Card を `app/layout.tsx` に設定

---

## ライセンス / 注意

本サイトはポートフォリオ掲載用に制作した架空のサンプルです。
掲載している会社名・事例・料金・連絡先はすべて架空のものです。
