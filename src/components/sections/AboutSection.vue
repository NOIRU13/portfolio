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
            <div class="mt-6 max-w-3xl mx-auto text-lg text-gray-500 space-y-6">
              <p>
                時代はAI駆動開発へ　最先端の技術でアイディアを実現可能に
              </p>

              <div class="grid md:grid-cols-2 gap-8 mt-8 text-left">
                <ScrollReveal animation="slide-left" :delay="200">
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-3">システムの長期継続性</h4>
                    <p class="text-gray-600">
                      AI技術と人の力を組み合わせ、保守性の高いシステムを構築します。
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-right" :delay="300">
                  <div>
                    <h4 class="text-xl font-semibold text-gray-900 mb-3">無限の可能性</h4>
                    <p class="text-gray-600">
                      AI駆動により、複雑なアイデアも効率的に実装できます。
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade" :delay="400">
                <p class="mt-8 text-center italic">
                  AI駆動開発により、プロダクト案を低コストで実現可能に
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Key principles -->
      <ScrollReveal animation="rise" :delay="100">
        <div class="mt-16">
          <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-gray-900">開発におけるポリシー</h3>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <ScrollReveal animation="scale" :delay="200">
              <Card hover class="text-center">
                <template #default>
                  <div class="flex justify-center mb-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">AI駆動開発</h4>
                  <p class="text-gray-600">
                    AI技術で開発効率を向上させ、高品質なコードを実現します。
                  </p>
                </template>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="scale" :delay="300">
              <Card hover class="text-center">
                <template #default>
                  <div class="flex justify-center mb-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">システムの長期的な継続性</h4>
                  <p class="text-gray-600">
                    人とAIの協働により、長期的に安定したシステムを構築します。
                  </p>
                </template>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="scale" :delay="400">
              <Card hover class="text-center">
                <template #default>
                  <div class="flex justify-center mb-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">クライアントの要望を実現</h4>
                  <p class="text-gray-600">
                    AI技術により、お客様の多様なご要望に迅速にお応えします。
                  </p>
                </template>
              </Card>
            </ScrollReveal>
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