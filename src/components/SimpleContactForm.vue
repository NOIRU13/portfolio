<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">お問い合わせ</h2>

    <!-- Netlify Forms用のフォーム -->
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit="handleSubmit"
      class="space-y-6"
    >
      <!-- 隠しフィールド -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- ハニーポット（スパム対策） -->
      <div class="hidden">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>

      <!-- 件名 -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          件名 <span class="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="お問い合わせの件について"
        />
      </div>

      <!-- メッセージ -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          メッセージ <span class="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
          placeholder="お問い合わせ内容をご記入ください..."
        ></textarea>
      </div>

      <!-- 連絡先メールアドレス（任意） -->
      <div>
        <label for="reply-email" class="block text-sm font-medium text-gray-700 mb-2">
          返信用メールアドレス（任意）
        </label>
        <input
          id="reply-email"
          name="reply-email"
          type="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="返信が必要な場合はご入力ください"
        />
      </div>

      <!-- 送信ボタン -->
      <div>
        <button
          type="submit"
          class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          送信する
        </button>
      </div>

      <!-- 成功メッセージ -->
      <div v-if="showSuccess" class="p-4 bg-green-50 border border-green-200 rounded-md">
        <p class="text-green-600 text-sm">
          お問い合わせを受け付けました。ご連絡いただきありがとうございます。
        </p>
      </div>
    </form>

    <!-- プライバシー通知 -->
    <div class="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
      <p class="text-xs text-gray-600">
        <strong>プライバシーについて:</strong>
        このフォームは匿名で送信されます。返信が必要な場合のみメールアドレスをご入力ください。
        個人情報は適切に保護されます。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showSuccess = ref(false)

const handleSubmit = (event: Event) => {
  // フォームの通常の送信を許可
  setTimeout(() => {
    showSuccess.value = true
  }, 1000)
}
</script>