import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1a2030 0%, #0c0f14 100%)",
          borderRadius: 40,
          border: "6px solid #e8a54b66",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "48%",
            background:
              "linear-gradient(180deg, #e8a54b28 0%, transparent 100%)",
            borderRadius: "40px 40px 0 0",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8a54b",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          HA
        </div>
      </div>
    ),
    { ...size },
  );
}
