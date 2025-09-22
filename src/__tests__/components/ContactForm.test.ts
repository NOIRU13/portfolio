import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm.vue'

// useContactServiceをモック
const mockSendContactEmail = vi.fn()
vi.mock('@/composables/useContactService', () => ({
  useContactService: () => ({
    sendContactEmail: mockSendContactEmail
  })
}))

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render all form fields', () => {
    const wrapper = mount(ContactForm)

    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#subject').exists()).toBe(true)
    expect(wrapper.find('#message').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('should show validation errors for empty required fields', async () => {
    const wrapper = mount(ContactForm)

    // フィールドにフォーカスして離れる（バリデーションをトリガー）
    const nameInput = wrapper.find('#name')
    await nameInput.trigger('focus')
    await nameInput.trigger('blur')

    const emailInput = wrapper.find('#email')
    await emailInput.trigger('focus')
    await emailInput.trigger('blur')

    const subjectInput = wrapper.find('#subject')
    await subjectInput.trigger('focus')
    await subjectInput.trigger('blur')

    const messageInput = wrapper.find('#message')
    await messageInput.trigger('focus')
    await messageInput.trigger('blur')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('名前は必須項目です')
    expect(wrapper.text()).toContain('メールアドレスは必須項目です')
    expect(wrapper.text()).toContain('件名は必須項目です')
    expect(wrapper.text()).toContain('メッセージは必須項目です')
  })

  it('should validate email format', async () => {
    const wrapper = mount(ContactForm)

    const emailInput = wrapper.find('#email')
    await emailInput.setValue('invalid-email')
    await emailInput.trigger('blur')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('正しいメールアドレスを入力してください')
  })

  it('should validate minimum length requirements', async () => {
    const wrapper = mount(ContactForm)

    // 名前の最小長チェック
    const nameInput = wrapper.find('#name')
    await nameInput.setValue('a')
    await nameInput.trigger('blur')

    // 件名の最小長チェック
    const subjectInput = wrapper.find('#subject')
    await subjectInput.setValue('abc')
    await subjectInput.trigger('blur')

    // メッセージの最小長チェック
    const messageInput = wrapper.find('#message')
    await messageInput.setValue('short')
    await messageInput.trigger('blur')

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('名前は2文字以上で入力してください')
    expect(wrapper.text()).toContain('件名は5文字以上で入力してください')
    expect(wrapper.text()).toContain('メッセージは10文字以上で入力してください')
  })

  it('should disable submit button when form is invalid', async () => {
    const wrapper = mount(ContactForm)

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  it('should enable submit button when form is valid', async () => {
    const wrapper = mount(ContactForm)

    // 有効なデータを入力
    await wrapper.find('#name').setValue('山田太郎')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('テスト件名')
    await wrapper.find('#message').setValue('これはテストメッセージです。十分な長さがあります。')

    await wrapper.vm.$nextTick()

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('should call sendContactEmail when form is submitted', async () => {
    mockSendContactEmail.mockResolvedValue(true)

    const wrapper = mount(ContactForm)

    // 有効なデータを入力
    await wrapper.find('#name').setValue('山田太郎')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('テスト件名')
    await wrapper.find('#message').setValue('これはテストメッセージです。十分な長さがあります。')

    await wrapper.vm.$nextTick()

    // フォームを送信
    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(mockSendContactEmail).toHaveBeenCalledWith({
      name: '山田太郎',
      email: 'test@example.com',
      subject: 'テスト件名',
      message: 'これはテストメッセージです。十分な長さがあります。'
    })
  })

  it('should show privacy notice', () => {
    const wrapper = mount(ContactForm)

    expect(wrapper.text()).toContain('プライバシーについて')
    expect(wrapper.text()).toContain('匿名化されて処理されます')
  })

  it('should show loading state during submission', async () => {
    // 送信中の状態をシミュレート
    let resolvePromise: (value: boolean) => void
    const mockPromise = new Promise<boolean>((resolve) => {
      resolvePromise = resolve
    })
    mockSendContactEmail.mockReturnValue(mockPromise)

    const wrapper = mount(ContactForm)

    // 有効なデータを入力
    await wrapper.find('#name').setValue('山田太郎')
    await wrapper.find('#email').setValue('test@example.com')
    await wrapper.find('#subject').setValue('テスト件名')
    await wrapper.find('#message').setValue('これはテストメッセージです。十分な長さがあります。')

    await wrapper.vm.$nextTick()

    // フォームを送信
    const submitPromise = wrapper.find('form').trigger('submit.prevent')
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('送信中...')

    // 送信完了
    resolvePromise!(true)
    await submitPromise
    await wrapper.vm.$nextTick()
  })
})