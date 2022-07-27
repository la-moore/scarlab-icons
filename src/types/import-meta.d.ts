declare global {
  interface ImportMetaEnv {
    BASE_URL: string
    MODE: string
    DEV: boolean
    PROD: boolean
    VITE_ENV: 'production' | 'dev'
    VITE_API_BASE_URL: string
    VITE_AUTH_BASE_URL: string
  }
}

export {}
