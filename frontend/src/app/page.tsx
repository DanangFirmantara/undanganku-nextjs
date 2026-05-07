import type { Metadata } from "next"
import { LandingPageClient } from "@/components/landing/LandingPageClient"

export const metadata: Metadata = {
  title: "Undangan Pernikahan Digital Indonesia | Invyta",
  description:
    "Buat undangan pernikahan digital yang cantik dalam 5 menit. Musik otomatis, countdown, RSVP, dan amplop digital. Bagikan lewat WhatsApp. Mulai gratis!",
  openGraph: {
    title: "Undangan Pernikahan Digital Indonesia | Invyta",
    description:
      "Buat undangan pernikahan digital cantik dalam 5 menit. Musik, countdown, RSVP, amplop digital. Bagikan lewat WhatsApp.",
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Invyta — Undangan Pernikahan Digital",
      },
    ],
  },
}

export default function LandingPage() {
  return <LandingPageClient />
}
