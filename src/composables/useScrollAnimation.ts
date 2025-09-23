import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface ScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
    once?: boolean
    delay?: number
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        once = true,
        delay = 0
    } = options

    const elementRef: Ref<HTMLElement | null> = ref(null)
    const isVisible = ref(false)
    const hasAnimated = ref(false)

    let observer: IntersectionObserver | null = null

    const createObserver = () => {
        if (typeof window === 'undefined') return

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (delay > 0) {
                            setTimeout(() => {
                                isVisible.value = true
                                hasAnimated.value = true
                            }, delay)
                        } else {
                            isVisible.value = true
                            hasAnimated.value = true
                        }

                        if (once && observer && entry.target) {
                            observer.unobserve(entry.target)
                        }
                    } else if (!once) {
                        isVisible.value = false
                    }
                })
            },
            {
                threshold,
                rootMargin
            }
        )
    }

    const startObserving = () => {
        if (observer && elementRef.value) {
            observer.observe(elementRef.value)
        }
    }

    const stopObserving = () => {
        if (observer && elementRef.value) {
            observer.unobserve(elementRef.value)
        }
    }

    onMounted(() => {
        createObserver()
        startObserving()
    })

    onUnmounted(() => {
        if (observer) {
            observer.disconnect()
        }
    })

    return {
        elementRef,
        isVisible,
        hasAnimated,
        startObserving,
        stopObserving
    }
}