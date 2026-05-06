"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/layout/Sidebar"
import { AppHeader } from "@/components/layout/AppHeader"
import { useAuth } from "@/hooks/useAuth"
import { hasValidToken } from "@/lib/auth-client"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!hasValidToken()) {
      router.replace("/login")
    } else {
      setChecked(true)
    }
  }, [router])

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-500 text-sm">Memuat...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar user={user} isOpen={sidebarOpen} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader
          user={user}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          onLogout={logout}
        />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
