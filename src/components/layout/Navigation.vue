<template>
  <nav class="flex flex-col space-y-2" v-if="vertical">
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
      :class="{ 'bg-blue-50 text-blue-700': item.active }"
    >
      {{ item.label }}
    </a>
  </nav>

  <nav class="flex space-x-8" v-else>
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      class="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
      :class="{ 'text-gray-900': item.active }"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import type { NavigationItem } from '@/types'

interface Props {
  items: NavigationItem[]
  vertical?: boolean
}

defineProps<Props>()
</script>