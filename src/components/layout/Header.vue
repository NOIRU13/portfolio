<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm">
    <nav class="w-full px-6">
      <div class="flex justify-between items-center h-12">
        <!-- Left side: Title -->
        <div class="flex items-center">
          <router-link
            to="/"
            class="text-lg font-bold text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            JIN KUROKI
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <a
            v-for="item in navigationItems"
            :key="item.href"
            :href="item.href"
            @click.prevent="scrollToSection(item.href.substring(1))"
            class="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            :class="{ 'text-white font-semibold': item.active }"
          >
            {{ item.label }}
          </a>
        </div>

        <!-- Right side: External Links and Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- External Links - Hidden on mobile -->
          <div class="hidden sm:flex items-center space-x-4">
            <!-- GitHub Icon -->
            <a
              href="https://github.com/NOIRU13"
              target="_blank"
              rel="noopener noreferrer"
              class="opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              title="GitHub"
            >
              <img :src="githubIcon" alt="GitHub" class="w-4 h-4 invert" />
            </a>

            <!-- Qiita Icon -->
            <a
              href="https://qiita.com/JKUROKI"
              target="_blank"
              rel="noopener noreferrer"
              class="opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              title="Qiita"
            >
              <img :src="qiitaIcon" alt="Qiita" class="w-4 h-4" />
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 p-1"
            aria-label="メニューを開く"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800"
    >
      <div class="px-6 py-4 space-y-3">
        <!-- Navigation Links -->
        <a
          v-for="item in navigationItems"
          :key="item.href"
          :href="item.href"
          @click.prevent="handleMobileNavClick(item.href.substring(1))"
          class="block text-gray-300 hover:text-white text-base font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 py-2"
          :class="{ 'text-white font-semibold': item.active }"
        >
          {{ item.label }}
        </a>

        <!-- External Links -->
        <div class="flex items-center space-x-6 pt-4 border-t border-gray-700">
          <a
            href="https://github.com/NOIRU13"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            title="GitHub"
          >
            <img :src="githubIcon" alt="GitHub" class="w-4 h-4 invert" />
            <span class="text-sm">GitHub</span>
          </a>

          <a
            href="https://qiita.com/JKUROKI"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            title="Qiita"
          >
            <img :src="qiitaIcon" alt="Qiita" class="w-4 h-4" />
            <span class="text-sm">Qiita</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { NavigationItem } from '@/types'
import githubIcon from '@/assets/github-mark.png'
import qiitaIcon from '@/assets/qiita-icon.png'

const isMobileMenuOpen = ref(false)

const navigationItems: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 48 // Header height in pixels (h-12 = 48px)
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMobileNavClick = (sectionId: string) => {
  scrollToSection(sectionId)
  isMobileMenuOpen.value = false
}
</script>