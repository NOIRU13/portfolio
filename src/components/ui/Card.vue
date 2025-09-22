<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="px-6 py-4 border-b border-gray-200">
      <slot name="header" />
    </div>

    <div class="px-6 py-4">
      <slot />
    </div>

    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false
})

const cardClasses = computed(() => {
  const baseClasses = ['bg-white', 'rounded-xl', 'transition-all', 'duration-200']

  const variantClasses = {
    default: ['border', 'border-gray-200'],
    outlined: ['border-2', 'border-gray-300'],
    elevated: ['shadow-lg', 'border', 'border-gray-100']
  }

  const paddingClasses = {
    none: [],
    sm: ['p-4'],
    md: ['p-6'],
    lg: ['p-8']
  }

  const classes = [
    ...baseClasses,
    ...variantClasses[props.variant]
  ]

  if (props.padding !== 'none') {
    classes.push(...paddingClasses[props.padding])
  }

  if (props.hover) {
    classes.push('hover:shadow-lg', 'hover:-translate-y-1', 'cursor-pointer')
  }

  return classes
})
</script>