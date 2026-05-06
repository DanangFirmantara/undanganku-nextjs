export interface User {
  id: number
  guid: string
  email: string
  firstName: string
  lastName: string
  isActive: boolean
  roles: string[]
  createdAt: string
  updatedAt: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  expiresIn: number
  user: User
}

export interface AuthState {
  isLoggedIn: boolean
  user: User | null
  token: string | null
  expiresAt: number | null
}

export function isAdmin(user: User | null): boolean {
  return user?.roles?.includes("ROLE_ADMIN") ?? false
}

export type UserPreview = Pick<User, "id" | "email" | "firstName" | "lastName">
