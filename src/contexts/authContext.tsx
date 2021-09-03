import React, { createContext, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

export interface UserProps {
  email: string
  password: string
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  user: UserProps
  isAuthenticated: boolean
  loginError: boolean
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>(() => {
    const userLocalStorage = localStorage.getItem('@chakrademo:user')

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage)

      return userData
    }

    return {} as UserProps
  })
  const [loginError, setLoginError] = useState(false)
  const isAuthenticated = !!user.email
  const history = useHistory()

  const signIn = useCallback(async ({ email, password }) => {
    if (email === 'paulo@paulo.com' && password === 'secreta') {
      const userData = {
        email,
        password
      }

      // Save user on browser local storage
      localStorage.setItem('@chakrademo:user', JSON.stringify(userData))

      setUser({ ...userData })
    } else {
      setLoginError(true)
    }
  }, [])

  const signOut = useCallback(async () => {
    localStorage.removeItem('@chakrademo:user')
    history.replace('/')
    setUser({} as UserProps)
  }, [setUser, history])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signOut,
        signIn,
        loginError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
