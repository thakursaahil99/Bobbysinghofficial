import { ImageResponse } from "next/og";

export const alt = "Bobby Singh — Contract Kitchen & Café Expert";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#1a1720",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(216,53,42,0.45) 0%, rgba(216,53,42,0) 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 3, background: "#d8352a", display: "flex" }} />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(246,239,230,0.6)",
            }}
          >
            Managing Director, Red Bean Hospitality
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 32,
            lineHeight: 1.05,
            color: "#f6efe6",
          }}
        >
          <span style={{ marginRight: 24 }}>Contract food, run</span>
          <span style={{ color: "#d8352a" }}>properly.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "rgba(246,239,230,0.72)",
          }}
        >
          20+ years · 1,200+ kitchens &amp; cafés · Shark Tank India
        </div>
      </div>
    ),
    { ...size },
  );
}
