<template>
  <section id="about" class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <ScrollReveal animation="slide-left">
          <div class="mb-12 lg:mb-0">
            <div class="text-center lg:text-left">
              <h2 class="text-base text-gray-600 font-semibold tracking-wide uppercase">About</h2>
              <h3 class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
                地元と共に生きる<br>
                東北在住のWebエンジニア
              </h3>
              <div class="mt-6 text-lg text-gray-500 space-y-6">
                <p>
                  宮城県仙台市を拠点に、Webエンジニア、フロントエンドエンジニアとして活動しています。
                </p>

                <p>
                  「テクノロジーを身近に」— 使いやすさを追求したデザインで、あなたのアイデアを形にします。
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-right" :delay="200">
          <div class="relative">
            <div class="relative lg:ml-8">
              <!-- Profile placeholder - can be replaced with actual image -->
              <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-300/20 rounded-2xl shadow-xl relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                      <svg class="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p class="text-lg font-semibold text-gray-700">JK</p>
                    <p class="text-sm text-gray-500">Frontend Engineer</p>
                  </div>
                </div>
              </div>

              <!-- Decorative elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-gray-100 rounded-full opacity-60"></div>
              <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-300/20 rounded-full opacity-60"></div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- AI-Driven Possibilities Section -->
      <ScrollReveal animation="rise" :delay="100">
        <div class="mt-20">
          <div class="text-center">
            <h3 class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI駆動の可能性
            </h3>
            <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
              時代はAI駆動開発へ　プロダクトを低コストで自在に実現可能
            </p>

            <!-- Bordered Feature Cards -->
            <div class="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <ScrollReveal animation="slide-up" :delay="200">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">システムの長期継続性</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      AI技術と人の力を組み合わせ、保守性の高いシステムを構築
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" :delay="300">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">アイディアを実現</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      AI駆動により、複雑なアイデアも効率的に実装
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" :delay="400">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">効率的な実装</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      AI駆動開発により、コーディングより設計に注力可能に
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Key principles -->
      <ScrollReveal animation="rise" :delay="100">
        <div class="mt-20">
          <div class="text-center">
            <h3 class="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
             開発ポリシー
            </h3>
            <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
              人間の経験と判断を重視　安心してお任せいただける開発体制を構築
            </p>

            <!-- Bordered Feature Cards -->
            <div class="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <ScrollReveal animation="slide-up" :delay="200">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">品質保証とテスト</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      AIコードも人間が検証　徹底したテストで品質を保証
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" :delay="300">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">セキュリティ重視</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      AI開発でもセキュリティは妥協なし　業界標準に準拠した安全な開発
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" :delay="400">
                <div class="border-2 border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div class="text-center">
                    <div class="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">継続的なサポート</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      開発後も安心　運用・保守まで責任を持ってサポート
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import ScrollReveal from '@/components/common/ScrollReveal.vue'
</script>