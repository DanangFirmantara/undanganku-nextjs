"use client"

import type { User } from "@/types/user"

interface AppHeaderProps {
  user: User | null
  onToggleSidebar: () => void
  onLogout: () => void
}

export function AppHeader({ user, onToggleSidebar, onLogout }: AppHeaderProps) {
  const displayName = user ? `${user.firstName} ${user.lastName}` : "Pengguna"

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        aria-label="Toggle sidebar"
      >
        <span className="text-xl leading-none">☰</span>
      </button>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700 font-medium">{displayName}</span>
        <button
          onClick={onLogout}
          className="text-sm bg-red-900 hover:bg-red-800 text-white px-3 py-1.5 rounded-lg font-medium transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
