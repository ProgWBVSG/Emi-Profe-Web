import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen que se muestra al compartir el sitio en WhatsApp, redes o buscadores. */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#e8574a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 22,
              backgroundColor: "#0b0b0c",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 8,
              padding: "16px 14px",
            }}
          >
            <div style={{ width: 12, height: 20, borderRadius: 6, backgroundColor: "#e8574a" }} />
            <div style={{ width: 12, height: 34, borderRadius: 6, backgroundColor: "#e8574a" }} />
            <div style={{ width: 12, height: 48, borderRadius: 6, backgroundColor: "#e8574a" }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#0b0b0c",
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          Construí el cuerpo
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#0b0b0c",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginTop: 8,
          }}
        >
          que querés
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 600,
            color: "#0b0b0c",
            marginTop: 40,
          }}
        >
          {site.nombre} · {site.rol}
        </div>
      </div>
    ),
    { ...size }
  );
}
