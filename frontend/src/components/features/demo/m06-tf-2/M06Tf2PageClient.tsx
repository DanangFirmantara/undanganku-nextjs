import { Pinyon_Script, Cormorant_Infant, Sora } from "next/font/google"
import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"
import "./m06tf2.css"

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
})

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sora",
  display: "swap",
})

export function M06Tf2PageClient() {
  const fontVars = [pinyonScript.variable, cormorantInfant.variable, sora.variable].join(" ")

  return (
    <div className={`m06tf2-root flex h-screen overflow-hidden ${fontVars}`}>
      <LeftPanel />
      <div className="m06tf2-right">
        <RightPanel />
      </div>
    </div>
  )
}
