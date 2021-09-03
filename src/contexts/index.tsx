import React from 'react'
import { AuthProvider } from './authContext'

export const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}
