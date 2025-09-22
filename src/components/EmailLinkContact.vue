<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">お問い合わせ</h2>

    <div class="text-center space-y-6">
      <p class="text-gray-600">
        お問い合わせは以下のメールアドレスまでお気軽にどうぞ
      </p>

      <!-- メールリンク -->
      <a
        :href="mailtoLink"
        class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        メールを送信
      </a>

      <!-- メールアドレス表示 -->
      <div class="p-4 bg-gray-50 rounded-md">
        <p class="text-sm text-gray-600 mb-2">メールアドレス:</p>
        <p class="font-mono text-lg text-gray-800">kurojinwork13@gmail.com</p>
      </div>

      <!-- コピーボタン -->
      <button
        @click="copyEmail"
        class="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-md transition-colors duration-200"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        {{ copyButtonText }}
      </button>
    </div>

    <!-- 使用方法 -->
    <div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
      <h3 class="font-medium text-blue-800 mb-2">メール送信時のお願い</h3>
      <ul class="text-sm text-blue-700 space-y-1">
        <li>• 件名にお問い合わせ内容を簡潔にご記入ください</li>
        <li>• 返信が必要な場合は、連絡先を明記してください</li>
        <li>• 匿名でのお問い合わせも歓迎いたします</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const copyButtonText = ref('メールアドレスをコピー')
const email = 'kurojinwork13@gmail.com'

const mailtoLink = computed(() => {
  const subject = encodeURIComponent('[お問い合わせ] ')
  const body = encodeURIComponent(`

件名: [ここに件名をご記入ください]

お問い合わせ内容:
[ここにお問い合わせ内容をご記入ください]

※匿名でのお問い合わせをご希望の場合は、個人情報の記載は不要です。
`)
  return `mailto:${email}?subject=${subject}&body=${body}`
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copyButtonText.value = 'コピーしました！'
    setTimeout(() => {
      copyButtonText.value = 'メールアドレスをコピー'
    }, 2000)
  } catch (err) {
    console.error('コピーに失敗しました:', err)
    copyButtonText.value = 'コピーに失敗しました'
    setTimeout(() => {
      copyButtonText.value = 'メールアドレスをコピー'
    }, 2000)
  }
}
</script>