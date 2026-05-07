import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get("type") ?? "default"
  const title =
    searchParams.get("title") ?? "Undangan Pernikahan Digital"
  const subtitle =
    searchParams.get("subtitle") ??
    "Buat undangan pernikahan digital yang cantik dalam 5 menit"

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #7B1C2E 0%, #5C1322 50%, #1A3A2A 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "2px solid #C9A84C",
            borderRadius: "8px",
            display: "flex",
          }}
        />

        {/* Brand */}
        <div
          style={{
            color: "#C9A84C",
            fontSize: "28px",
            letterSpacing: "0.3em",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          INVYTA
        </div>

        {/* Diamond ornament */}
        <div
          style={{
            color: "#C9A84C",
            fontSize: "20px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          {"◆ ◆ ◆"}
        </div>

        {/* Title */}
        <div
          style={{
            color: "#FAF4E8",
            fontSize: type === "invitation" ? "64px" : "52px",
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.2,
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#D4A843",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "800px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom brand */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            color: "#C9A84C",
            fontSize: "18px",
            letterSpacing: "0.2em",
            display: "flex",
          }}
        >
          invyta.id
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
