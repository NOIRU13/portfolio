<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- ページタイトル -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-semibold text-gray-900 sm:text-5xl tracking-tight">プライバシーポリシー</h1>
        <p class="mt-6 text-lg text-gray-600">
          当サイトにおける個人情報の取り扱いについて
        </p>
      </div>

      <!-- プライバシーポリシー内容 -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
        <div class="prose prose-gray max-w-none">
          <div class="space-y-8">
            <!-- 基本方針 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">基本方針</h2>
              <p class="text-gray-700 leading-relaxed">
                JIN KUROKI（以下「当サイト」）は、ユーザーの個人情報の保護を重要視し、個人情報保護法を遵守して適切に取り扱います。
              </p>
            </section>

            <!-- 収集する情報 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">収集する情報</h2>
              <div class="space-y-4">
                <h3 class="text-lg font-medium text-gray-800">お問い合わせフォームでの情報</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>お名前</li>
                  <li>メールアドレス</li>
                  <li>会社名（任意）</li>
                  <li>お問い合わせ内容</li>
                </ul>

                <h3 class="text-lg font-medium text-gray-800 mt-6">アクセスログ情報</h3>
                <ul class="list-disc list-inside text-gray-700 space-y-2">
                  <li>IPアドレス</li>
                  <li>アクセス日時</li>
                  <li>ユーザーエージェント</li>
                  <li>リファラー情報</li>
                </ul>
              </div>
            </section>

            <!-- 利用目的 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">利用目的</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                収集した個人情報は、以下の目的でのみ利用します：
              </p>
              <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li>お問い合わせに対する回答・対応</li>
                <li>サービス向上のための分析（統計的な処理を行い、個人を特定できない形で利用）</li>
                <li>重要なお知らせの連絡</li>
              </ul>
            </section>

            <!-- 第三者提供 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">第三者への提供</h2>
              <p class="text-gray-700 leading-relaxed">
                当サイトは、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <!-- データ保護 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">データの保護</h2>
              <p class="text-gray-700 leading-relaxed">
                個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じています。また、個人情報へのアクセスは必要最小限の関係者に制限しています。
              </p>
            </section>

            <!-- Cookie -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">Cookieの使用</h2>
              <p class="text-gray-700 leading-relaxed">
                当サイトでは、サービス向上のためCookieを使用する場合があります。Cookieによって個人を特定することはできません。Cookieの無効化はブラウザの設定で行うことができます。
              </p>
            </section>

            <!-- アクセス解析 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">アクセス解析ツール</h2>
              <p class="text-gray-700 leading-relaxed">
                当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用してユーザーの情報を収集しますが、個人を特定する情報は含まれません。
              </p>
            </section>

            <!-- お問い合わせ -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">お問い合わせ</h2>
              <p class="text-gray-700 leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
              </p>
            </section>

            <!-- 改定 -->
            <section>
              <h2 class="text-2xl font-semibold text-gray-900 mb-4">プライバシーポリシーの改定</h2>
              <p class="text-gray-700 leading-relaxed">
                本プライバシーポリシーは、法令の変更や当サイトの運営方針の変更に伴い、予告なく改定する場合があります。改定後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <!-- 制定日 -->
            <section class="pt-8 border-t border-gray-200">
              <p class="text-sm text-gray-500 text-right">
                制定日：{{ currentDate }}<br>
                最終更新日：{{ currentDate }}
              </p>
            </section>
          </div>
        </div>
      </div>

      <!-- 戻るボタン -->
      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-gray-200 shadow-sm text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          ホームに戻る
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 現在の日付を取得
const currentDate = computed(() => {
  return new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// ページがマウントされたときにトップにスクロール
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>