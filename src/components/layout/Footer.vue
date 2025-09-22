<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <div>
            <h3 class="text-xl font-semibold text-gray-900">JIN KUROKI</h3>
            <p class="mt-2 text-sm text-gray-600">
              東北で活動するフロントエンドエンジニア
            </p>
          </div>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4 class="text-xs uppercase tracking-wide text-gray-900 font-semibold">
                ナビゲーション
              </h4>
              <ul class="mt-4 space-y-4">
                <li v-for="item in navigationItems" :key="item.href">
                  <a :href="item.href" class="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4 class="text-xs uppercase tracking-wide text-gray-900 font-semibold">
                外部リンク
              </h4>
              <ul class="mt-4 space-y-4">
                <li>
                  <a href="https://github.com/NOIRU13" class="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://qiita.com/JKUROKI" class="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                    Qiita
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-200 pt-6">
        <p class="text-sm text-gray-600 text-center">
          &copy; {{ currentYear }} JIN KUROKI. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavigationItem } from '@/types'

const currentYear = computed(() => new Date().getFullYear())

const navigationItems: NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]
</script>