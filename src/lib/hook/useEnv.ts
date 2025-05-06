import { createContext, useContext } from 'react'

export type EnvContextType = {
  drupalUrl: string
  baseUrl: string
  pathUrl: string
}

export const EnvContext = createContext<EnvContextType | null>(null)

export function useEnv() {
  const context = useContext(EnvContext)
  if (!context) {
    throw new Error('useEnv must be used within an EnvProvider')
  }
  return context
}