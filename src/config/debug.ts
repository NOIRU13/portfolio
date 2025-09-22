import { LogLevel, type DebugConfig } from '@/utils/debug'

export const debugConfig: DebugConfig = {
  level: import.meta.env.DEV
    ? LogLevel.DEBUG
    : LogLevel.ERROR,
  enabled: import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true',
  namespace: 'noiru',
  timestamp: true,
  colors: true
}

export const getDebugLevel = (): LogLevel => {
  const envLevel = import.meta.env.VITE_DEBUG_LEVEL as string

  switch (envLevel?.toUpperCase()) {
    case 'ERROR':
      return LogLevel.ERROR
    case 'WARN':
      return LogLevel.WARN
    case 'INFO':
      return LogLevel.INFO
    case 'DEBUG':
      return LogLevel.DEBUG
    case 'TRACE':
      return LogLevel.TRACE
    default:
      return import.meta.env.DEV ? LogLevel.DEBUG : LogLevel.ERROR
  }
}

export const isDevelopment = () => import.meta.env.DEV
export const isProduction = () => import.meta.env.PROD
export const isDebugEnabled = () => debugConfig.enabled

export default debugConfig