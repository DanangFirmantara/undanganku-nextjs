import type { Metadata } from "next"
import { DemoPageClient } from "@/components/features/demo/DemoPageClient"

export const metadata: Metadata = {
  title: "Demo Undangan Pernikahan Digital | Invyta",
  description:
    "Lihat contoh undangan pernikahan digital Invyta. Animasi cinematic, musik otomatis, countdown, RSVP, dan amplop digital — semua dalam satu link.",
  openGraph: {
    title: "Contoh Undangan Pernikahan Digital | Invyta",
    description:
      "Preview undangan digital modern dengan musik, animasi, dan fitur lengkap. Buat milikmu dalam 5 menit di invyta.id.",
    images: [
      {
        url: "/og/og-demo.jpg",
        width: 1200,
        height: 630,
        alt: "Demo Undangan Pernikahan Digital Invyta",
      },
    ],
  },
}

export default function DemoPage() {
  return <DemoPageClient />
}
