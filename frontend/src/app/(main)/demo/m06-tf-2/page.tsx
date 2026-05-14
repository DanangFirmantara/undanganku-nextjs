import type { Metadata } from "next"
import { M06Tf2PageClient } from "@/components/features/demo/m06-tf-2/M06Tf2PageClient"

export const metadata: Metadata = {
  title: "Demo Undangan — Tema 3D Motion 06 (Tanpa Foto) v2 | Undanganku",
  description:
    "Preview template undangan pernikahan Putri Cantika Sari & Putra Andika Pratama — Tema 3D Motion 06 dengan animasi float, countdown realtime, love story timeline, RSVP, dan amplop digital.",
  openGraph: {
    title: "Demo Tema 3D Motion 06 (Tanpa Foto) | Undanganku",
    description:
      "Lihat tampilan template undangan digital modern dengan animasi 3D motion. Buat milikmu sekarang.",
  },
  robots: { index: false, follow: false },
}

export default function M06Tf2DemoPage() {
  return <M06Tf2PageClient />
}
