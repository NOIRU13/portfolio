export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  TRACE = 4
}

export interface DebugConfig {
  level: LogLevel
  enabled: boolean
  namespace?: string
  timestamp: boolean
  colors: boolean
}

export interface LogEntry {
  timestamp: Date
  level: LogLevel
  namespace: string
  message: string
  data?: unknown[]
}

class DebugLogger {
  public config: DebugConfig
  private logs: LogEntry[] = []
  private maxLogs = 1000

  constructor(config: Partial<DebugConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enabled: import.meta.env.DEV,
      namespace: 'app',
      timestamp: true,
      colors: true,
      ...config
    }
  }

  private shouldLog(level: LogLevel): boolean {
    return this.config.enabled && level <= this.config.level
  }

  private formatMessage(level: LogLevel, namespace: string, message: string): string {
    const timestamp = this.config.timestamp ? `[${new Date().toISOString()}] ` : ''
    const levelStr = LogLevel[level].padEnd(5)
    const namespaceStr = namespace ? `[${namespace}] ` : ''

    if (this.config.colors && typeof window !== 'undefined') {
      return `${timestamp}%c${levelStr}%c ${namespaceStr}${message}`
    }

    return `${timestamp}${levelStr} ${namespaceStr}${message}`
  }

  private log(level: LogLevel, message: string, ...data: unknown[]): void {
    if (!this.shouldLog(level)) return

    const logEntry: LogEntry = {
      timestamp: new Date(),
      level,
      namespace: this.config.namespace || 'app',
      message,
      data: data.length > 0 ? data : undefined
    }

    this.logs.push(logEntry)
    if (this.logs.length > this.maxLogs) {
      this.logs.shift()
    }

    const formattedMessage = this.formatMessage(level, logEntry.namespace, message)

    if (this.config.colors && typeof window !== 'undefined') {
      const colors = {
        [LogLevel.ERROR]: '#ff4444',
        [LogLevel.WARN]: '#ffaa00',
        [LogLevel.INFO]: '#00aaff',
        [LogLevel.DEBUG]: '#44ff44',
        [LogLevel.TRACE]: '#888888'
      }

      switch (level) {
        case LogLevel.ERROR:
          console.error(formattedMessage, `color: ${colors[level]}`, 'color: inherit', ...data)
          break
        case LogLevel.WARN:
          console.warn(formattedMessage, `color: ${colors[level]}`, 'color: inherit', ...data)
          break
        default:
          console.log(formattedMessage, `color: ${colors[level]}`, 'color: inherit', ...data)
      }
    } else {
      switch (level) {
        case LogLevel.ERROR:
          console.error(formattedMessage, ...data)
          break
        case LogLevel.WARN:
          console.warn(formattedMessage, ...data)
          break
        default:
          console.log(formattedMessage, ...data)
      }
    }
  }

  error(message: string, ...data: unknown[]): void {
    this.log(LogLevel.ERROR, message, ...data)
  }

  warn(message: string, ...data: unknown[]): void {
    this.log(LogLevel.WARN, message, ...data)
  }

  info(message: string, ...data: unknown[]): void {
    this.log(LogLevel.INFO, message, ...data)
  }

  debug(message: string, ...data: unknown[]): void {
    this.log(LogLevel.DEBUG, message, ...data)
  }

  trace(message: string, ...data: unknown[]): void {
    this.log(LogLevel.TRACE, message, ...data)
  }

  group(label: string): void {
    if (this.config.enabled) {
      console.group(label)
    }
  }

  groupEnd(): void {
    if (this.config.enabled) {
      console.groupEnd()
    }
  }

  time(label: string): void {
    if (this.config.enabled) {
      console.time(label)
    }
  }

  timeEnd(label: string): void {
    if (this.config.enabled) {
      console.timeEnd(label)
    }
  }

  table(data: unknown): void {
    if (this.config.enabled && this.shouldLog(LogLevel.DEBUG)) {
      console.table(data)
    }
  }

  updateConfig(newConfig: Partial<DebugConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }

  setLevel(level: LogLevel): void {
    this.config.level = level
  }

  setNamespace(namespace: string): void {
    this.config.namespace = namespace
  }

  enable(): void {
    this.config.enabled = true
  }

  disable(): void {
    this.config.enabled = false
  }

  getLogs(): LogEntry[] {
    return [...this.logs]
  }

  clearLogs(): void {
    this.logs = []
  }

  createNamespaced(namespace: string): DebugLogger {
    return new DebugLogger({
      ...this.config,
      namespace
    })
  }
}

export const debug = new DebugLogger()

export const createDebugger = (namespace: string) => debug.createNamespaced(namespace)

export default debug