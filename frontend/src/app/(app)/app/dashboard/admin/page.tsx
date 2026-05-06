"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { isAdmin } from "@/types/user"

const QUICK_LINKS = [
  { label: "Manage Users", href: "/app/users", desc: "Kelola pengguna aplikasi" },
  { label: "View Activity Logs", href: "#", desc: "Lihat log aktivitas sistem" },
  { label: "System Configuration", href: "#", desc: "Konfigurasi sistem" },
  { label: "Generate Reports", href: "#", desc: "Buat laporan data" },
]

export default function AdminDashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && !isAdmin(user)) {
      router.replace("/app/dashboard/user")
    }
  }, [user, router])

  if (!user || !isAdmin(user)) return null

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold">Selamat datang, {user.firstName}!</h2>
        <p className="text-gray-300 text-sm mt-1">Panel administrasi UndanganKu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors group"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900 group-hover:text-red-900">{link.label}</div>
                  <div className="text-xs text-gray-500">{link.desc}</div>
                </div>
                <span className="text-gray-400 group-hover:text-red-900">→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Informasi Pengguna</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{user.email}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Nama</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{user.firstName} {user.lastName}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</dt>
              <dd className="mt-0.5">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {user.isActive ? "Aktif" : "Tidak Aktif"}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Roles</dt>
              <dd className="mt-0.5 flex gap-1 flex-wrap">
                {user.roles.map((r) => (
                  <span key={r} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {r}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
