import type { Metadata } from "next"
import { M06Tf3PageClient } from "@/components/features/demo/m06-tf-3/M06Tf3PageClient"

export const metadata: Metadata = {
  title: "Demo Undangan — Tema 3D Motion 06 (Tanpa Foto) v3 | Undanganku",
  description:
    "Preview template undangan pernikahan Putri Cantika Sari & Putra Andika Pratama — Tema 3D Motion 06 dengan animasi parallax layers, cursor Lottie, countdown realtime, love story timeline, RSVP, dan amplop digital.",
  openGraph: {
    title: "Demo Tema 3D Motion 06 (Tanpa Foto) v3 | Undanganku",
    description:
      "Lihat tampilan template undangan digital modern dengan animasi 3D motion dan cursor Lottie. Buat milikmu sekarang.",
  },
  robots: { index: false, follow: false },
}

export default function M06Tf3DemoPage() {
  return <M06Tf3PageClient />
}
