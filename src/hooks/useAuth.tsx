import { useContext } from 'react'

import { AuthContextData, AuthContext } from 'src/contexts/authContext'

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.')
  }

  return context
}
