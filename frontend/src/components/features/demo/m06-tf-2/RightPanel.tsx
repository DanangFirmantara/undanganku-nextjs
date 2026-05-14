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
    <main id="main-content">
      {/* Decorative ornament at top */}
      <div className="flex justify-center pt-6 pb-2">
        <Image
          src="/templates/m06-tf/asset-motion-06.png"
          alt=""
          width={200}
          height={80}
          className="opacity-60 object-contain"
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
