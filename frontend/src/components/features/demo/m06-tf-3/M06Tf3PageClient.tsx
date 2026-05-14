"use client"

import dynamic from "next/dynamic"
import { Pinyon_Script, Cormorant_Infant, Sora, Aref_Ruqaa, Nunito_Sans } from "next/font/google"
import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"
import "./m06tf3.css"

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
)

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
})

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
})

const arefRuqaa = Aref_Ruqaa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-aref",
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito",
  display: "swap",
})

export function M06Tf3PageClient() {
  const fontVars = [
    pinyonScript.variable,
    cormorantInfant.variable,
    sora.variable,
    arefRuqaa.variable,
    nunitoSans.variable,
  ].join(" ")

  return (
    <div className={`m06tf3-root flex h-screen overflow-hidden ${fontVars}`}>
      <LeftPanel />
      <div className="m06tf3-right">
        <RightPanel />
      </div>

      {/* Cursor Lottie animation — fixed bottom right */}
      <DotLottieReact
        src="/templates/m06-tf/LOTTIE-MOUSE-HITAM.json"
        loop
        autoplay
        style={{
          width: "40px",
          height: "40px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
