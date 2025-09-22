<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-sm">
    <nav class="w-full px-6">
      <div class="flex justify-between items-center h-12">
        <!-- Left side: Title and Navigation -->
        <div class="flex items-center space-x-8">
          <router-link
            to="/"
            class="text-lg font-bold text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            JIN KUROKI
          </router-link>

          <!-- Navigation - Always visible -->
          <div class="flex items-center space-x-6">
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
        </div>

        <!-- Right side: External Links -->
        <div class="flex items-center space-x-4">
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
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/types'
import githubIcon from '@/assets/github-mark.png'
import qiitaIcon from '@/assets/qiita-icon.png'

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
</script>