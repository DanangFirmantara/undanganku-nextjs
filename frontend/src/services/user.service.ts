import type { User } from "@/types/user"
import { getToken } from "@/lib/auth-client"

const API_URL = process.env.NEXT_PUBLIC_API_URL

async function fetchWithAuth<T>(path: string, options?: RequestInit): Promise<T> {
  const token = getToken()
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json() as Promise<T>
}

export const userService = {
  getAll: () => fetchWithAuth<User[]>("/users"),
}
