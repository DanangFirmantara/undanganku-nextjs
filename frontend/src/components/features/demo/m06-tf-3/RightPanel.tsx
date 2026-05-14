import Image from "next/image"
import { OpeningSection } from "./OpeningSection"
import { CoverSection } from "./CoverSection"
import { CountdownSection } from "./CountdownSection"
import { AkadSection } from "./AkadSection"
import { ResepsiSection } from "./ResepsiSection"
import { DresscodeSection } from "./DresscodeSection"
import { LiveStreamSection } from "./LiveStreamSection"
import { LoveStorySection } from "./LoveStorySection"
import { WeddingGiftSection } from "./WeddingGiftSection"
import { WishesSection } from "./WishesSection"
import { ClosingSection } from "./ClosingSection"

export function RightPanel() {
  return (
    <main id="main-content" style={{ background: "#FFFCF3" }}>
      {/* Decorative ornament at top */}
      <div
        className="flex justify-center"
        style={{ padding: "24px 0 8px", background: "#FFFCF3" }}
      >
        <Image
          src="/templates/m06-tf/asset-motion-06.png"
          alt=""
          width={180}
          height={72}
          className="object-contain"
          style={{ opacity: 0.4 }}
          aria-hidden="true"
        />
      </div>

      <OpeningSection />
      <CoverSection />
      <CountdownSection />
      <AkadSection />
      <ResepsiSection />
      <DresscodeSection />
      <LiveStreamSection />
      <LoveStorySection />
      <WeddingGiftSection />
      <WishesSection />
      <ClosingSection />
    </main>
  )
}
