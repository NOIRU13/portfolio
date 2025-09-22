# お問い合わせシステム

このプロジェクトには、匿名性を担保したセキュアなお問い合わせフォームシステムが実装されています。

## 機能

- 📝 **Vue.jsベースのお問い合わせフォーム** - 入力バリデーション付き
- 🔒 **匿名化処理** - 個人情報をハッシュ化して保護
- 📧 **複数の送信方法** - Formspree → API → コンソール出力のフォールバック
- ✅ **包括的なテスト** - コンポーネントとサービスの完全なテストカバレッジ
- 🛡️ **TypeScript対応** - 型安全性の確保

## セットアップ

1. 環境変数の設定:
   ```bash
   cp .env.example .env
   ```

2. Formspreeの設定:
   `.env`ファイルに実際のFormspree IDを設定してください:
   ```
   VITE_FORMSPREE_FORM_ID=your_actual_form_id
   ```

3. Formspreeアカウント設定:
   - [Formspree](https://formspree.io)でアカウントを作成
   - 新しいフォームを作成
   - フォームIDを`.env`ファイルに設定

## 使用方法

### フォームコンポーネント

```vue
<template>
  <ContactForm />
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>
```

### ページとしての使用

ContactViewコンポーネントが既に作成されており、ルーターに登録すればすぐに使用できます。

## 匿名化機能

システムは以下の情報を匿名化します:

- **個人情報の除去**: 名前、メールアドレスは送信されません
- **ハッシュ化**: 送信者を一意に識別するハッシュを生成（復元不可能）
- **メタデータのみ**: 名前の文字数、メールドメイン、ブラウザ情報のみ送信

## テスト

```bash
# 全テスト実行
npm run test:unit

# 型チェック
npm run type-check

# リント
npm run lint
```

## ファイル構成

```
src/
├── components/
│   ├── ContactForm.vue          # メインのフォームコンポーネント
├── composables/
│   ├── useForm.ts              # フォーム状態管理
│   └── useContactService.ts     # メール送信サービス
├── views/
│   └── ContactView.vue         # お問い合わせページ
├── types/
│   └── form.ts                 # 型定義
└── __tests__/
    ├── components/
    │   └── ContactForm.test.ts  # フォームのテスト
    └── composables/
        └── useContactService.test.ts # サービスのテスト
```

## セキュリティ機能

1. **データ匿名化**: 個人を特定できる情報は送信されません
2. **ハッシュ化**: 送信者識別用のハッシュは復元不可能
3. **フォールバック機能**: 送信失敗時も安全にハンドリング
4. **入力検証**: XSSやインジェクション攻撃を防止

## カスタマイズ

### 送信先メールアドレスの変更

`src/composables/useContactService.ts`の以下の行を編集:

```typescript
email: 'kurojinwork13@gmail.com',  // ← ここを変更
```

### バリデーションルールの変更

`src/composables/useForm.ts`の`validateField`関数を編集してください。

### スタイルの変更

TailwindCSSクラスを使用してスタイリングされています。
`src/components/ContactForm.vue`のクラス名を変更してカスタマイズできます。