import { ImageResponse } from "next/og";

export const alt = "VTA Talent Cloud automotive workforce platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (<div
          style={{
              alignItems: "center",
              background: "linear-gradient(135deg, #fff 0%, #fef5f4 55%, #ffdeda 100%)",
              color: "#111827",
              display: "flex",
              height: "100%",
              justifyContent: "space-between",
              padding: "74px 82px",
              width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 780 }}>
            <div style={{ color: "#e4322b", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>
              VOC TECHNICAL ACADEMY
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 800, lineHeight: 1.04, marginTop: 34 }}>
              <span>India&apos;s Automotive</span>
              <span style={{ color: "#e4322b" }}>Talent Cloud</span>
            </div>
            <div style={{ color: "#374151", display: "flex", fontSize: 29, lineHeight: 1.4, marginTop: 34 }}>
              Practical skills, trusted certification and faster automotive hiring—all on one platform.
            </div>
          </div>
          <div
            style={{
                alignItems: "center",
                background: "#e4322b",
                border: "18px solid #ff8f89",
                borderRadius: 999,
                boxShadow: "0 28px 65px rgba(196,30,26,.24)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                fontSize: 42,
                fontWeight: 800,
                height: 270,
                justifyContent: "center",
                lineHeight: 0.95,
                width: 270,
            }}
          >
            <span>Talent</span>
            <span>Cloud™</span>
          </div>
        </div>),
        size,
    );
}

