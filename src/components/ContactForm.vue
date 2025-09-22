<template>
  <div class="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
    <h2 class="text-2xl font-semibold text-gray-900 mb-8 text-center">お問い合わせ</h2>

    <!-- Formspree直接送信フォーム -->
    <form
      action="https://formspree.io/f/xyzngbjq"
      method="POST"
      class="space-y-6"
      @submit="handleSubmit"
    >
      <!-- 送信成功時のリダイレクト先 -->
      <input type="hidden" name="_next" :value="successUrl" />

      <!-- 送信失敗時のリダイレクト先 -->
      <input type="hidden" name="_error" :value="errorUrl" />

      <!-- スパム対策 -->
      <input type="hidden" name="_captcha" value="true" />

      <!-- Formspree設定 -->
      <input type="hidden" name="_replyto" value="" />
      <input type="hidden" name="_subject" value="【JIN KUROKIポートフォリオ】お問い合わせ" />
      <input type="hidden" name="_format" value="plain" />

      <!-- スパムボット対策 honeypot -->
      <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

      <!-- 追加のFormspree設定 -->
      <input type="hidden" name="_language" value="ja" />
      <input type="hidden" name="_cc" value="" />
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          お名前 <span class="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-200"
          placeholder="山田太郎"
        />
      </div>

      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          メールアドレス <span class="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-200"
          placeholder="example@email.com"
        />
      </div>

      <!-- Company Field (Optional) -->
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
          会社名（任意）
        </label>
        <input
          id="company"
          type="text"
          name="company"
          class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-200"
          placeholder="株式会社〇〇"
        />
      </div>

      <!-- Subject Field -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          件名 <span class="text-red-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-200"
          placeholder="お問い合わせの件について"
        />
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          メッセージ <span class="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 focus:bg-white transition-all duration-200 resize-vertical"
          placeholder="お問い合わせ内容をご記入ください..."
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full py-4 px-6 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none disabled:shadow-none"
        >
          {{ isSubmitting ? '送信中...' : '送信する' }}
        </button>
      </div>
    </form>

    <!-- Privacy Notice -->
    <div class="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-xl">
      <p class="text-sm text-gray-700 leading-relaxed">
        <span class="font-medium text-gray-900">プライバシーについて:</span>
        お送りいただいた個人情報は、お問い合わせの対応のみに使用いたします。
        第三者への提供は行いません。
      </p>
    </div>

    <!-- 送信後の案内 -->
    <div class="mt-4 p-5 bg-gray-50 border border-gray-200 rounded-xl">
      <p class="text-sm text-gray-700 leading-relaxed">
        <span class="font-medium text-gray-900">送信後について:</span>
        送信後、Formspreeの確認ページが表示されます。初回送信時はメール確認が必要な場合があります。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const isSubmitting = ref(false)

// 現在のベースURLを取得
const baseUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return 'http://localhost:5173' // 開発環境用のフォールバック
})

// 成功時とエラー時のリダイレクト先URL
const successUrl = computed(() => `${baseUrl.value}/contact/success`)
const errorUrl = computed(() => `${baseUrl.value}/contact/error`)

// フォーム送信制御
const handleSubmit = (event: Event) => {
  if (isSubmitting.value) {
    event.preventDefault()
    return
  }

  isSubmitting.value = true

  // 送信後のリセット（3秒後）
  setTimeout(() => {
    isSubmitting.value = false
  }, 3000)
}
</script>