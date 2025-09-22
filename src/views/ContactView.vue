<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- ページタイトル -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-semibold text-gray-900 sm:text-5xl tracking-tight">お問い合わせ</h1>
        <p class="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          プロジェクトのご相談やご質問がございましたら、お気軽にお問い合わせください
        </p>
      </div>

      <!-- 連絡先情報とプロジェクト情報 -->
      <div class="max-w-4xl mx-auto mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 連絡先情報 -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div class="space-y-8">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">ビデオ通話</h3>
                <p class="text-gray-600 mt-1">Zoom・Teams・Google Meet対応可能</p>
              </div>
            </div>

            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">活動拠点</h3>
                <p class="text-gray-600 mt-1">宮城県仙台市（出張対応可能）</p>
              </div>
            </div>

            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">レスポンス</h3>
                <p class="text-gray-600 mt-1">通常24時間以内に返信いたします</p>
              </div>
            </div>
          </div>
        </div>

        <!-- プロジェクト情報 -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-6">なんでもご相談ください</h3>
          <ul class="space-y-5 text-gray-600">
            <li class="flex items-center space-x-4">
              <svg class="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-800 font-medium">Webシステムの新規開発</span>
            </li>
            <li class="flex items-center space-x-4">
              <svg class="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-800 font-medium">レスポンシブデザイン</span>
            </li>
            <li class="flex items-center space-x-4">
              <svg class="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-800 font-medium">既存システムの保守・運用・メンテナンス</span>
            </li>
            <li class="flex items-center space-x-4">
              <svg class="w-6 h-6 text-gray-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-800 font-medium">機能追加・カスタマイズ</span>
            </li>
          </ul>
          </div>
        </div>
      </div>

      <!-- お問い合わせフォーム -->
      <div class="max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ContactForm from '@/components/ContactForm.vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>