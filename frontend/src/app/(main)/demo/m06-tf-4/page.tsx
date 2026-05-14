import type { Metadata } from "next"
import { M06Tf4PageClient } from "@/components/features/demo/m06-tf-4/M06Tf4PageClient"

export const metadata: Metadata = {
  title: "Demo Undangan — Tema 3D Motion 06 (Tanpa Foto) v4 | Undanganku",
  description:
    "Preview template undangan pernikahan Putri Cantika Sari & Putra Andika Pratama — Tema 3D Motion 06 dengan gate undangan, countdown realtime, love story timeline, RSVP, dan amplop digital.",
  openGraph: {
    title: "Demo Tema 3D Motion 06 (Tanpa Foto) v4 | Undanganku",
    description:
      "Lihat tampilan template undangan digital modern dengan animasi 3D motion dan phone frame 390px. Buat milikmu sekarang.",
  },
  robots: { index: false, follow: false },
}

export default function M06Tf4DemoPage() {
  return <M06Tf4PageClient />
}
