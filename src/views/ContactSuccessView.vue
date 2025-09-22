<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
      <!-- 成功アイコン -->
      <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-8">
        <svg class="h-10 w-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <!-- 成功メッセージ -->
      <h2 class="text-3xl font-semibold text-gray-900 mb-6">送信完了</h2>

      <p class="text-gray-600 mb-8 text-lg leading-relaxed">
        お問い合わせありがとうございます。<br>
        メッセージを正常に受信いたしました。
      </p>

      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <p class="text-sm text-gray-700 leading-relaxed">
          <span class="font-medium text-gray-900">次のステップ:</span><br>
          内容を確認の上、通常1-2営業日以内にご返信いたします。<br>
          お急ぎの場合は、お電話でのお問い合わせもお受けしております。
        </p>
      </div>

      <!-- 戻るボタン -->
      <div class="space-y-3">
        <router-link
          to="/contact"
          class="w-full inline-flex justify-center items-center px-6 py-4 border border-gray-200 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          お問い合わせフォームに戻る
        </router-link>

        <router-link
          to="/"
          class="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
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
// 送信完了画面のロジック
</script>