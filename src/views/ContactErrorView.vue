<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
      <!-- エラーアイコン -->
      <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-8">
        <svg class="h-10 w-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>

      <!-- エラーメッセージ -->
      <h2 class="text-3xl font-semibold text-gray-900 mb-6">送信エラー</h2>

      <p class="text-gray-600 mb-8 text-lg leading-relaxed">
        申し訳ございません。<br>
        メッセージの送信中にエラーが発生しました。
      </p>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
        <p class="text-sm text-gray-700 leading-relaxed">
          <span class="font-medium text-gray-900">考えられる原因:</span><br>
          • 一時的なネットワークの問題<br>
          • サーバーのメンテナンス中<br>
          • 入力内容に問題がある可能性
        </p>
      </div>

      <!-- 対処法 -->
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-gray-700 leading-relaxed">
          <span class="font-medium text-gray-900">対処法:</span><br>
          しばらく時間をおいてから再度お試しください。<br>
          問題が解決しない場合は、直接メールでお問い合わせください。
        </p>
        <p class="text-sm text-gray-700 mt-3 font-mono bg-white px-3 py-2 rounded-lg border">
          kurojinwork13@gmail.com
        </p>
      </div>

      <!-- 戻るボタン -->
      <div class="space-y-3">
        <router-link
          to="/contact"
          class="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          もう一度送信する
        </router-link>

        <button
          @click="copyEmailAddress"
          class="w-full inline-flex justify-center items-center px-6 py-4 border border-gray-200 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          {{ copyButtonText }}
        </button>

        <router-link
          to="/"
          class="w-full inline-flex justify-center items-center px-6 py-4 border border-gray-200 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          ホームに戻る
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copyButtonText = ref('メールアドレスをコピー')

const copyEmailAddress = async () => {
  try {
    await navigator.clipboard.writeText('kurojinwork13@gmail.com')
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