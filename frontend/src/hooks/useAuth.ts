"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import type { User, LoginRequest } from "@/types/user"
import {
  getToken,
  getUser,
  getExpiresAt,
  setAuth,
  clearAuth,
  hasValidToken,
} from "@/lib/auth-client"

interface UseAuthReturn {
  user: User | null
  token: string | null
  isLoggedIn: boolean
  isLoading: boolean
  error: string | null
  login: (data: LoginRequest) => Promise<void>
  logout: () => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleAutoLogout = useCallback((expiresAt: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    const delay = expiresAt - Date.now()
    if (delay <= 0) return
    timerRef.current = setTimeout(() => {
      clearAuth()
      setUser(null)
      setToken(null)
      router.push("/login")
    }, delay)
  }, [router])

  useEffect(() => {
    if (hasValidToken()) {
      const storedUser = getUser()
      const storedToken = getToken()
      const expiresAt = getExpiresAt()
      setUser(storedUser)
      setToken(storedToken)
      if (expiresAt) scheduleAutoLogout(expiresAt)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [scheduleAutoLogout])

  const login = useCallback(async (data: LoginRequest): Promise<void> => {
    setIsLoading(true)
    setError(null)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const msg = res.status === 401 ? "Email atau password salah" : "Login gagal"
        throw new Error(msg)
      }
      const json = await res.json() as { token: string; expiresIn: number; user: User }
      setAuth(json.token, json.user, json.expiresIn)
      setUser(json.user)
      setToken(json.token)
      const expiresAt = getExpiresAt()
      if (expiresAt) scheduleAutoLogout(expiresAt)
      router.push("/app/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan")
    } finally {
      setIsLoading(false)
    }
  }, [router, scheduleAutoLogout])

  const logout = useCallback(async (): Promise<void> => {
    const currentToken = getToken()
    try {
      if (currentToken) {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        await fetch(`${apiUrl}/auth/logout`, {
          method: "POST",
          headers: { Authorization: `Bearer ${currentToken}` },
        })
      }
    } catch {
      // ignore logout errors
    } finally {
      if (timerRef.current) clearTimeout(timerRef.current)
      clearAuth()
      setUser(null)
      setToken(null)
      router.push("/login")
    }
  }, [router])

  return {
    user,
    token,
    isLoggedIn: hasValidToken(),
    isLoading,
    error,
    login,
    logout,
  }
}
