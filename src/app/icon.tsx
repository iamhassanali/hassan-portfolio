import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #161b24 0%, #0c0f14 100%)",
          borderRadius: 8,
          border: "1.5px solid #e8a54b55",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "45%",
            background:
              "linear-gradient(180deg, #e8a54b22 0%, transparent 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8a54b",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.06em",
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
