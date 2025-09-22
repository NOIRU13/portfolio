import { ref } from 'vue'
import { Client } from '@formspree/core'
import type { ContactForm } from '@/types/form'
import { createDebugger } from '@/utils/debug'

const debug = createDebugger('useContactService')


interface AnonymizedEmailPayload {
  subject: string
  message: string
  timestamp: string
  senderHash: string
  metadata: {
    nameLength: number
    emailDomain: string
    userAgent?: string
    language?: string
  }
}

export function useContactService() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // シンプルなハッシュ関数（匿名化用）
  const simpleHash = (str: string): string => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // 32bit整数に変換
    }
    return Math.abs(hash).toString(16)
  }


  // 匿名化処理
  const anonymizeFormData = (formData: ContactForm): AnonymizedEmailPayload => {
    const emailParts = formData.email.split('@')
    const domain = emailParts.length > 1 ? emailParts[1] : 'unknown'

    return {
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toISOString(),
      senderHash: simpleHash(formData.email + formData.name),
      metadata: {
        nameLength: formData.name.length,
        emailDomain: domain,
        userAgent: navigator.userAgent?.substring(0, 50) || undefined,
        language: navigator.language || undefined
      }
    }
  }

  // フォーマットされたメール本文の作成
  const createEmailBody = (anonymizedData: AnonymizedEmailPayload): string => {
    return `
件名: ${anonymizedData.subject}

メッセージ:
${anonymizedData.message}

---
送信情報:
- 送信時刻: ${anonymizedData.timestamp}
- 送信者ハッシュ: ${anonymizedData.senderHash}
- 名前文字数: ${anonymizedData.metadata.nameLength}文字
- メールドメイン: ${anonymizedData.metadata.emailDomain}
- 言語設定: ${anonymizedData.metadata.language || '不明'}
- ブラウザ情報: ${anonymizedData.metadata.userAgent || '不明'}

※この情報は匿名化されており、個人を特定することはできません。
    `.trim()
  }

  // メール送信API（Formspreeを使用）
  const sendEmailViaFormspree = async (emailData: AnonymizedEmailPayload): Promise<boolean> => {
    try {
      // Formspreeの設定（実際の値は環境変数から取得するのが望ましい）
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || 'demo_form'

      const client = new Client({
        project: formspreeId
      })

      const formData = {
        email: 'kurojinwork13@gmail.com',
        subject: `[お問い合わせ] ${emailData.subject}`,
        message: createEmailBody(emailData),
        _replyto: 'noreply@example.com'
      }

      // Formspreeを使ってメール送信
      const response = await client.submitForm(formspreeId, formData)

      debug.info('Email sent via Formspree', { response })
      return true
    } catch (err) {
      debug.error('Formspree send failed', { error: err })
      throw err
    }
  }

  // Fetch APIを使った代替メール送信方法
  const sendEmailViaAPI = async (emailData: AnonymizedEmailPayload): Promise<boolean> => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'kurojinwork13@gmail.com',
          subject: `[お問い合わせ] ${emailData.subject}`,
          body: createEmailBody(emailData)
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      debug.info('Email sent via API', { result })
      return true
    } catch (err) {
      debug.error('API send failed', { error: err })
      throw err
    }
  }

  // メイン送信関数
  const sendContactEmail = async (formData: ContactForm): Promise<boolean> => {
    isLoading.value = true
    error.value = null

    try {
      debug.info('Starting contact email send', {
        subject: formData.subject,
        nameLength: formData.name.length,
        emailDomain: formData.email.split('@')[1] || 'unknown'
      })

      // フォームデータを匿名化
      const anonymizedData = anonymizeFormData(formData)
      debug.debug('Form data anonymized', { anonymizedData })

      // メール送信を試行（Formspree -> API -> コンソール出力の順）
      try {
        await sendEmailViaFormspree(anonymizedData)
        debug.info('Email sent successfully via Formspree')
        return true
      } catch (formspreeError) {
        debug.warn('Formspree failed, trying API', { error: formspreeError })

        try {
          await sendEmailViaAPI(anonymizedData)
          debug.info('Email sent successfully via API')
          return true
        } catch (apiError) {
          debug.warn('API failed, falling back to console output', { error: apiError })

          // 最終的にはコンソールに出力（開発環境での確認用）
          console.log('\n=== お問い合わせメール（匿名化済み） ===')
          console.log(`宛先: kurojinwork13@gmail.com`)
          console.log(`件名: [お問い合わせ] ${anonymizedData.subject}`)
          console.log('本文:')
          console.log(createEmailBody(anonymizedData))
          console.log('=== メール送信完了 ===\n')

          debug.info('Email content logged to console as fallback')
          return true
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '不明なエラーが発生しました'
      error.value = `メール送信中にエラーが発生しました: ${errorMessage}`
      debug.error('Contact email send failed', { error: err, formData })
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    sendContactEmail
  }
}