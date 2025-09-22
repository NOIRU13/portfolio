<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pt-12">
    <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div>
        <ScrollReveal animation="fade">
          <h1 class="text-6xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              JIN KUROKI
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="rise" :delay="200">
          <p class="text-xl text-gray-500 mb-6">
            テクノロジーを身近に
          </p>
        </ScrollReveal>

        <br>
        <ScrollReveal animation="scale" :delay="400">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors duration-200"
              @click="scrollToSection('about')"
            >
              詳しく見る
            </button>

            <button
              class="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors duration-200"
              @click="scrollToSection('contact')"
            >
              お問い合わせ
            </button>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal animation="rise" :delay="600">
        <div class="mt-16">
          <div class="flex justify-center space-x-8 text-gray-400">
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-700">3+</div>
              <div class="text-xs text-gray-500">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-700">10+</div>
              <div class="text-xs text-gray-500">Technologies</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-gray-700">∞</div>
              <div class="text-xs text-gray-500">Learning</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <!-- Scroll indicator -->
    <ScrollReveal animation="fade" :delay="800">
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </ScrollReveal>
  </section>
</template>

<script setup lang="ts">
import ScrollReveal from '@/components/common/ScrollReveal.vue'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.bg-grid-pattern {
  background-image: radial-gradient(circle, #000 1px, transparent 1px);
  background-size: 20px 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}
</style>