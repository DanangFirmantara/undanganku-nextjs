import type { User } from "@/types/user"

const TOKEN_KEY = "auth_token"
const USER_KEY = "auth_user"
const EXPIRES_KEY = "auth_expires"

function isBrowser(): boolean {
  return typeof window !== "undefined"
}

export function getToken(): string | null {
  if (!isBrowser()) return null
  return localStorage.getItem(TOKEN_KEY)
}

export function getUser(): User | null {
  if (!isBrowser()) return null
  const raw = localStorage.getItem(USER_KEY)
  if (!raw) return null
  try {
    return JSON.parse(raw) as User
  } catch {
    return null
  }
}

export function getExpiresAt(): number | null {
  if (!isBrowser()) return null
  const raw = localStorage.getItem(EXPIRES_KEY)
  if (!raw) return null
  const n = Number(raw)
  return isNaN(n) ? null : n
}

export function setAuth(token: string, user: User, expiresIn: number): void {
  if (!isBrowser()) return
  const expiresAt = Date.now() + expiresIn
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  localStorage.setItem(EXPIRES_KEY, String(expiresAt))
  document.cookie = `auth_token=${token}; path=/; max-age=${Math.floor(expiresIn / 1000)}`
}

export function clearAuth(): void {
  if (!isBrowser()) return
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(EXPIRES_KEY)
  document.cookie = "auth_token=; path=/; max-age=0"
}

export function isLoggedIn(): boolean {
  return hasValidToken()
}

export function hasValidToken(): boolean {
  if (!isBrowser()) return false
  const token = getToken()
  const expiresAt = getExpiresAt()
  if (!token || !expiresAt) return false
  return Date.now() < expiresAt
}
