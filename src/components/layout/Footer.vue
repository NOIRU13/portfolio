<template>
  <footer class="bg-white border-t border-gray-200">
    <div class="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
        <p class="text-sm text-gray-600">
          &copy; {{ currentYear }} JIN KUROKI. All rights reserved.
        </p>
        <router-link
          to="/privacy-policy"
          class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          プライバシーポリシー
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>