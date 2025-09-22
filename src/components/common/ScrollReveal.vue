<template>
  <div
    ref="elementRef"
    :class="[
      animationClass,
      { visible: isVisible },
      delayClass
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useScrollAnimation, type ScrollAnimationOptions } from '@/composables/useScrollAnimation'

interface Props {
  animation?: 'rise' | 'fade' | 'slide-left' | 'slide-right' | 'scale'
  delay?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'rise',
  delay: 0,
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  once: true
})

const options: ScrollAnimationOptions = {
  threshold: props.threshold,
  rootMargin: props.rootMargin,
  once: props.once,
  delay: props.delay
}

const { elementRef, isVisible } = useScrollAnimation(options)

const animationClass = computed(() => {
  switch (props.animation) {
    case 'fade':
      return 'scroll-animate-fade'
    case 'slide-left':
      return 'scroll-animate-slide-left'
    case 'slide-right':
      return 'scroll-animate-slide-right'
    case 'scale':
      return 'scroll-animate-scale'
    default:
      return 'scroll-animate'
  }
})

const delayClass = computed(() => {
  if (props.delay <= 0) return ''
  
  const delayMs = Math.min(props.delay, 400)
  const roundedDelay = Math.round(delayMs / 100) * 100
  
  return `scroll-animate-delay-${roundedDelay}`
})
</script>