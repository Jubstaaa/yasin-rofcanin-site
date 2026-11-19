import { ImageResponse } from "next/og";

import { OG_IMAGE } from "@/lib/og-image";

// A route named og.png exports as /og.png, so Caddy serves it as image/png;
// the opengraph-image file convention exports an extensionless file.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          borderLeft: "24px solid #167a46",
          color: "#212121",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>Yasin Rofcanin</div>
        <div style={{ color: "#616161", fontSize: 40, marginTop: 24 }}>
          Professor in Organisational Psychology and Human Resource Management
        </div>
        <div style={{ color: "#167a46", fontSize: 32, marginTop: 40 }}>
          School of Management, University of Bath
        </div>
      </div>
    ),
    { width: OG_IMAGE.width, height: OG_IMAGE.height },
  );
}
