"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { loginSchema, type LoginInput } from "@/lib/validations/auth"
import { useAuth } from "@/hooks/useAuth"
import { hasValidToken } from "@/lib/auth-client"

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading, error } = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    if (hasValidToken()) {
      router.push("/app/dashboard")
    }
  }, [router])

  const onSubmit = async (data: LoginInput) => {
    await login(data)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Masuk ke UndanganKu</h1>
          <p className="text-gray-500 text-sm mt-1">Masukkan kredensial Anda untuk melanjutkan</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 text-xs font-semibold mb-2">Demo Credentials:</p>
          <p className="text-blue-700 text-xs">Admin: admin@app.com / Admin@123456</p>
          <p className="text-blue-700 text-xs">User: user@app.com / User@123456</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 mb-4 text-sm" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email@contoh.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-xs text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
              aria-describedby={errors.password ? "password-error" : undefined}
              {...register("password")}
            />
            {errors.password && (
              <p id="password-error" role="alert" className="text-xs text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-900 hover:bg-red-800 disabled:opacity-60 text-white font-semibold py-2 rounded-lg text-sm transition-colors"
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          <Link href="/" className="text-red-900 hover:underline font-medium">
            ← Kembali ke Beranda
          </Link>
        </p>
      </div>
    </div>
  )
}
