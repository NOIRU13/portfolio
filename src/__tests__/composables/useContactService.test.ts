import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useContactService } from '@/composables/useContactService'
import type { ContactForm } from '@/types/form'
import type { Client } from '@formspree/core'

// Formspreeモジュールをモック
vi.mock('@formspree/core', () => ({
  Client: vi.fn().mockImplementation(() => ({
    submitForm: vi.fn()
  }))
}))

const mockFetch = vi.fn()

beforeEach(() => {
  vi.clearAllMocks()
  global.fetch = mockFetch
  ;(global as unknown as { navigator: Navigator }).navigator = {
    userAgent: 'test-user-agent',
    language: 'ja'
  }
})

describe('useContactService', () => {
  const testFormData: ContactForm = {
    name: '山田太郎',
    email: 'test@example.com',
    subject: 'テスト件名',
    message: 'これはテストメッセージです。'
  }

  it('should initialize with correct default values', () => {
    const { isLoading, error } = useContactService()

    expect(isLoading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  it('should successfully send email via Formspree', async () => {
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockResolvedValue({ ok: true })

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    const { sendContactEmail } = useContactService()
    const result = await sendContactEmail(testFormData)

    expect(result).toBe(true)
    expect(mockSubmitForm).toHaveBeenCalledWith(
      'demo_form',
      expect.objectContaining({
        email: 'kurojinwork13@gmail.com',
        subject: '[お問い合わせ] テスト件名',
        _replyto: 'noreply@example.com'
      })
    )
  })

  it('should fallback to API when Formspree fails', async () => {
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockRejectedValue(new Error('Formspree error'))

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    })

    const { sendContactEmail } = useContactService()
    const result = await sendContactEmail(testFormData)

    expect(result).toBe(true)
    expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: expect.stringContaining('kurojinwork13@gmail.com')
    })
  })

  it('should fallback to console logging when both Formspree and API fail', async () => {
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockRejectedValue(new Error('Formspree error'))

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    mockFetch.mockRejectedValue(new Error('API error'))

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const { sendContactEmail } = useContactService()
    const result = await sendContactEmail(testFormData)

    expect(result).toBe(true)
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('お問い合わせメール（匿名化済み）')
    )

    consoleSpy.mockRestore()
  })

  it('should anonymize form data correctly', async () => {
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockResolvedValue({ ok: true })

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    const { sendContactEmail } = useContactService()
    await sendContactEmail(testFormData)

    const callArgs = mockSubmitForm.mock.calls[0][1]
    const messageBody = callArgs.message

    // 元の名前やメールアドレスが含まれていないことを確認
    expect(messageBody).not.toContain('山田太郎')
    expect(messageBody).not.toContain('test@example.com')

    // 匿名化された情報が含まれていることを確認
    expect(messageBody).toContain('件名: テスト件名')
    expect(messageBody).toContain('メッセージ:\nこれはテストメッセージです。')
    expect(messageBody).toContain('送信者ハッシュ:')
    expect(messageBody).toContain('名前文字数: 4文字')
    expect(messageBody).toContain('メールドメイン: example.com')
  })

  it('should set loading state correctly during email sending', async () => {
    const { sendContactEmail, isLoading } = useContactService()

    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockImplementation(() =>
      new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100))
    )

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    expect(isLoading.value).toBe(false)

    const sendPromise = sendContactEmail(testFormData)
    expect(isLoading.value).toBe(true)

    await sendPromise
    expect(isLoading.value).toBe(false)
  })

  it('should handle errors and set error state', async () => {
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockRejectedValue(new Error('Formspree error'))

    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    mockFetch.mockRejectedValue(new Error('API error'))

    // コンソール出力もエラーを発生させる
    vi.spyOn(console, 'log').mockImplementation(() => {
      throw new Error('Console error')
    })

    const { sendContactEmail, error } = useContactService()
    const result = await sendContactEmail(testFormData)

    expect(result).toBe(false)
    expect(error.value).toContain('メール送信中にエラーが発生しました')
  })

  it('should generate different hashes for different users', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    const user1Data: ContactForm = {
      name: '田中花子',
      email: 'hanako@example.com',
      subject: 'テスト',
      message: 'メッセージ'
    }

    const user2Data: ContactForm = {
      name: '佐藤次郎',
      email: 'jiro@example.com',
      subject: 'テスト',
      message: 'メッセージ'
    }

    // Formspreeが失敗するようにモック設定してコンソール出力にフォールバック
    const { Client } = await import('@formspree/core')
    const mockSubmitForm = vi.fn().mockRejectedValue(new Error('Formspree error'))
    vi.mocked(Client).mockImplementation(() => ({
      submitForm: mockSubmitForm
    }) as Client)

    mockFetch.mockRejectedValue(new Error('API error'))

    const { sendContactEmail } = useContactService()

    // 1回目の送信（コンソール出力にフォールバック）
    await sendContactEmail(user1Data)
    const log1 = consoleSpy.mock.calls.find(call => call[0].includes('送信者ハッシュ'))

    consoleSpy.mockClear()

    // 2回目の送信（コンソール出力にフォールバック）
    await sendContactEmail(user2Data)
    const log2 = consoleSpy.mock.calls.find(call => call[0].includes('送信者ハッシュ'))

    // 異なるハッシュが生成されることを確認
    expect(log1).toBeDefined()
    expect(log2).toBeDefined()
    expect(log1?.[0]).not.toEqual(log2?.[0])

    consoleSpy.mockRestore()
  })
})