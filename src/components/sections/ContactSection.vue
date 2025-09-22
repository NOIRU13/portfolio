<template>
  <section id="contact" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="rise">
        <div class="text-center mb-12">
          <h2 class="text-base text-gray-600 font-semibold tracking-wide uppercase">Contact</h2>
          <h3 class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            お問い合わせ
          </h3>
          <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            ご相談やご質問がございましたら、お気軽にお問い合わせください
          </p>
        </div>
      </ScrollReveal>

      <!-- 対応方法・拠点情報テーブル -->
      <ScrollReveal animation="rise" :delay="200">
        <div class="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <tbody class="bg-white divide-y divide-gray-200">
                <tr class="hover:bg-gray-50 transition-colors duration-150">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div class="flex items-center">
                      <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      Web面談可能
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-700">
                    Google Meet、Microsoft Teams、Zoom での打ち合わせをご用意しております
                  </td>
                </tr>
                <tr class="hover:bg-gray-50 transition-colors duration-150">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div class="flex items-center">
                      <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      案件対応
                    </div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-700">
                    宮城県仙台市が拠点ですがリモート・出張対応も可能です
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      <!-- 主なサービス見出し -->
      <ScrollReveal animation="rise" :delay="350">
        <div class="mt-8 mb-4">
          <h4 class="text-sm font-medium text-gray-600 text-center">主なサービス</h4>
        </div>
      </ScrollReveal>

      <!-- サービス内容 - 横並び4つのテーブル -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScrollReveal animation="rise" :delay="400">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6 text-center">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 class="text-sm font-medium text-gray-900">新規システム開発</h4>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="rise" :delay="500">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6 text-center">
              <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 class="text-sm font-medium text-gray-900">既存システム保守</h4>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="rise" :delay="600">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6 text-center">
              <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 class="text-sm font-medium text-gray-900">システム運用</h4>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="rise" :delay="700">
          <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-6 text-center">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 class="text-sm font-medium text-gray-900">新規機能実装</h4>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- お問い合わせ前のメッセージ -->
      <ScrollReveal animation="rise" :delay="750">
        <div class="mt-12 text-center">
          <p class="text-lg text-gray-700 font-medium">まずはご気軽にご相談ください</p>
        </div>
      </ScrollReveal>

      <!-- お問い合わせフォームへのリンクボタン -->
      <ScrollReveal animation="scale" :delay="800">
        <div class="mt-6 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSesKKFAcHuWfMKqHQC1t67bbcPuRoFv4vlmq3C5NqIEuS7unA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            <div class="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2">
              <svg class="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            お問い合わせフォーム
          </a>
        </div>
      </ScrollReveal>

    </div>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/common/ScrollReveal.vue'
</script>
