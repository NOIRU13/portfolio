import { ref, reactive, computed } from 'vue'
import type { ContactForm } from '@/types/form'
import { createDebugger } from '@/utils/debug'

const debug = createDebugger('useForm')

export function useForm() {
  const isSubmitting = ref(false)
  const isSubmitted = ref(false)
  const submitError = ref<string | null>(null)

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const errors = reactive<Record<keyof ContactForm, string>>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const touched = reactive<Record<keyof ContactForm, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false
  })

  const validateField = (field: keyof ContactForm, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return '名前は必須項目です'
        if (value.trim().length < 2) return '名前は2文字以上で入力してください'
        return ''

      case 'email':
        if (!value.trim()) return 'メールアドレスは必須項目です'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return '正しいメールアドレスを入力してください'
        return ''

      case 'subject':
        if (!value.trim()) return '件名は必須項目です'
        if (value.trim().length < 5) return '件名は5文字以上で入力してください'
        return ''

      case 'message':
        if (!value.trim()) return 'メッセージは必須項目です'
        if (value.trim().length < 10) return 'メッセージは10文字以上で入力してください'
        if (value.trim().length > 1000) return 'メッセージは1000文字以内で入力してください'
        return ''

      default:
        return ''
    }
  }

  const validateForm = (): boolean => {
    debug.debug('Validating form', { formData: form })
    let isValid = true

    Object.keys(form).forEach(key => {
      const field = key as keyof ContactForm
      const error = validateField(field, form[field])
      errors[field] = error
      touched[field] = true

      if (error) {
        debug.warn(`Validation error for field ${field}`, { error, value: form[field] })
        isValid = false
      }
    })

    debug.debug('Form validation completed', { isValid, errors })
    return isValid
  }

  const updateField = (field: keyof ContactForm, value: string) => {
    form[field] = value

    if (touched[field]) {
      errors[field] = validateField(field, value)
    }
  }

  const markFieldAsTouched = (field: keyof ContactForm) => {
    touched[field] = true
    errors[field] = validateField(field, form[field])
  }

  const isFormValid = computed(() => {
    return Object.values(errors).every(error => !error) &&
           Object.values(form).every(value => value.trim() !== '')
  })

  const resetForm = () => {
    Object.keys(form).forEach(key => {
      const field = key as keyof ContactForm
      form[field] = ''
      errors[field] = ''
      touched[field] = false
    })

    isSubmitting.value = false
    isSubmitted.value = false
    submitError.value = null
  }

  const submitForm = async (callback?: (formData: ContactForm) => Promise<boolean>): Promise<boolean> => {
    if (!validateForm()) {
      return false
    }

    isSubmitting.value = true
    submitError.value = null

    try {
      let success = true

      if (callback) {
        success = await callback({ ...form })
      } else {
        // Simulate form submission - replace with actual form submission logic
        await new Promise(resolve => setTimeout(resolve, 2000))
      }

      if (success) {
        debug.info('Form submitted successfully', { formData: form })
        isSubmitted.value = true
        resetForm()
        return true
      } else {
        submitError.value = 'フォームの送信中にエラーが発生しました。もう一度お試しください。'
        return false
      }
    } catch (error) {
      debug.error('Form submission failed', { error, formData: form })
      submitError.value = 'フォームの送信中にエラーが発生しました。もう一度お試しください。'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    submitError,
    isFormValid,
    updateField,
    markFieldAsTouched,
    validateForm,
    submitForm,
    resetForm
  }
}