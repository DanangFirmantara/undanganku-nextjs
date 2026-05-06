"use client"

import { useAuth } from "@/hooks/useAuth"

export default function UserDashboardPage() {
  const { user } = useAuth()

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })
    : "-"

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="bg-gradient-to-r from-red-900 to-red-700 text-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold">Selamat datang, {user?.firstName ?? "Pengguna"}!</h2>
        <p className="text-red-100 text-sm mt-1">Kelola undangan pernikahan digitalmu di sini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Profil Anda</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{user?.email ?? "-"}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Nama</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{user ? `${user.firstName} ${user.lastName}` : "-"}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Status</dt>
              <dd className="mt-0.5">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${user?.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {user?.isActive ? "Aktif" : "Tidak Aktif"}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500 font-medium uppercase tracking-wide">Member Sejak</dt>
              <dd className="text-sm text-gray-900 mt-0.5">{memberSince}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Izin Akses</h3>
          <div className="space-y-2">
            {user?.roles?.map((role) => (
              <span key={role} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Mulai Sekarang</h3>
        <ul className="space-y-3">
          {[
            "Buat undangan pernikahan pertamamu",
            "Pilih tema yang sesuai dengan konsep pernikahanmu",
            "Bagikan link undangan ke semua tamu",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
