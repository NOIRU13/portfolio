# KJ Tech Portfolio

システムエンジニア「KJ Tech」のポートフォリオサイト。Vue 3 + TypeScript + Tailwind CSSで構築されたモダンなSPA（Single Page Application）です。

## 特徴

- **モダンな技術スタック**: Vue 3 Composition API、TypeScript、Tailwind CSS
- **Apple風デザイン**: ミニマルで洗練されたUI/UXデザイン
- **Learning Nextテーマ**: 学習と成長をテーマにしたデザインシステム
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ対応
- **フォーム機能**: バリデーション付きお問い合わせフォーム
- **アニメーション**: 滑らかなトランジションとホバー効果

## 技術スタック

- **フロントエンド**: Vue 3, TypeScript, Tailwind CSS
- **ビルドツール**: Vite
- **開発ツール**: ESLint, Prettier
- **テスト**: Vitest, Playwright
- **状態管理**: Pinia
- **ルーティング**: Vue Router

## プロジェクト構成

```
src/
├── components/
│   ├── layout/          # ヘッダー、フッター等のレイアウトコンポーネント
│   ├── sections/        # 各セクションコンポーネント
│   └── ui/             # 再利用可能なUIコンポーネント
├── composables/        # Vue 3 Composables
├── types/              # TypeScript型定義
└── assets/             # スタイルファイル、画像等
```

## セクション

1. **HeroSection**: ファーストビュー
2. **AboutSection**: 自己紹介
3. **SkillsSection**: 技術スキル表示
4. **ProjectsSection**: 実装コーナー
5. **ContactSection**: お問い合わせフォーム
6. **ExternalLinksSection**: GitHub、Qiitaリンク

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
