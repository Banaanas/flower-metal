import { ImageResponse } from "next/og";

import { appName, appSlogan } from "@/data/app-data";

export const alt = appName;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const Image = () => {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
      }}
    >
      {/* Logo - Flower with metal center */}
      <svg
        width="160"
        height="160"
        viewBox="0 0 32 32"
        style={{ marginBottom: "48px" }}
      >
        {/* Flower petals */}
        <circle cx="16" cy="6" r="5" fill="#FF69B4" />
        <circle cx="26" cy="16" r="5" fill="#FF69B4" />
        <circle cx="16" cy="26" r="5" fill="#FF69B4" />
        <circle cx="6" cy="16" r="5" fill="#FF69B4" />
        {/* Metal center */}
        <circle cx="16" cy="16" r="6" fill="#1a1a1a" />
      </svg>

      {/* App name */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-2px",
        }}
      >
        {appName}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: "28px",
          color: "#9ca3af",
          marginTop: "16px",
        }}
      >
        {appSlogan}
      </div>
    </div>,
    {
      ...size,
    }
  );
};

export default Image;
