import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"

export const config: NextAuthConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isProtected =
        nextUrl.pathname.startsWith("/dashboard") ||
        nextUrl.pathname.startsWith("/admin")
      if (isProtected) return isLoggedIn
      return true
    },
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
