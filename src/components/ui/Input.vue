<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <input
        v-if="type !== 'textarea'"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :value="modelValue"
        :class="inputClasses"
        @input="updateValue"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />

      <textarea
        v-else
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :value="modelValue"
        :class="inputClasses"
        @input="updateValue"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />

      <div v-if="$slots.icon" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <slot name="icon" />
      </div>
    </div>

    <p v-if="error" class="mt-2 text-sm text-red-600">
      {{ error }}
    </p>

    <p v-else-if="hint" class="mt-2 text-sm text-gray-500">
      {{ hint }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  id?: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea'
  placeholder?: string
  modelValue?: string | number
  required?: boolean
  disabled?: boolean
  error?: string
  hint?: string
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: []
  focus: []
}>()

const inputClasses = computed(() => {
  const baseClasses = [
    'block',
    'w-full',
    'px-3',
    'py-2',
    'border',
    'rounded-lg',
    'text-gray-900',
    'placeholder-gray-500',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transition-colors',
    'duration-200',
    'disabled:bg-gray-50',
    'disabled:text-gray-500',
    'disabled:cursor-not-allowed'
  ]

  if (props.error) {
    baseClasses.push(
      'border-red-300',
      'focus:border-red-500',
      'focus:ring-red-500'
    )
  } else {
    baseClasses.push(
      'border-gray-300',
      'focus:border-blue-500',
      'focus:ring-blue-500'
    )
  }

  if (props.type === 'textarea') {
    baseClasses.push('resize-vertical')
  }

  return baseClasses
})

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>