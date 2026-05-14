import type { Metadata } from "next"
import { M06TfPageClient } from "@/components/features/demo/m06-tf/M06TfPageClient"

export const metadata: Metadata = {
  title: "Demo Undangan — Tema 3D Motion 06 Tanpa Foto | Undanganku",
  description:
    "Preview template undangan pernikahan Tema 3D Motion 06 (Tanpa Foto) — animasi float, countdown realtime, love story timeline, RSVP, dan amplop digital.",
  openGraph: {
    title: "Demo Tema 3D Motion 06 (Tanpa Foto) | Undanganku",
    description: "Lihat tampilan template undangan digital modern dengan animasi 3D motion. Buat milikmu sekarang.",
  },
  robots: { index: false, follow: false },
}

export default function M06TfDemoPage() {
  return <M06TfPageClient />
}
