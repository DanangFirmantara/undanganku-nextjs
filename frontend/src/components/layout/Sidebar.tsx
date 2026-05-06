"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { isAdmin } from "@/types/user"
import type { User } from "@/types/user"

interface SidebarProps {
  user: User | null
  isOpen: boolean
}

const NAV_ITEMS = [
  { href: "/app/dashboard/user", label: "Dashboard", adminOnly: false },
  { href: "/app/dashboard/admin", label: "Admin Dashboard", adminOnly: true },
  { href: "/app/users", label: "User Management", adminOnly: true },
]

export function Sidebar({ user, isOpen }: SidebarProps) {
  const pathname = usePathname()
  const admin = isAdmin(user)

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-gray-900 text-white
        transform transition-transform duration-200
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:static lg:translate-x-0
      `}
    >
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-700">
        <span className="text-xl font-bold text-yellow-400">UndanganKu</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.filter((item) => !item.adminOnly || admin).map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                ${active ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
              `}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
