import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "AI Training Indonesia by Aurelius Ivan Wijaya";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/brand/logo-ondark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={logoSrc}
          alt="AI Training Indonesia"
          width={720}
          height={125}
          style={{ marginBottom: 48 }}
        />
        <p
          style={{
            fontSize: "36px",
            color: "#a0a0a0",
            margin: "0 0 20px 0",
            maxWidth: "900px",
            lineHeight: 1.4,
            textAlign: "center",
          }}
        >
          Corporate AI Training by Aurelius Ivan Wijaya
        </p>
        <p
          style={{
            fontSize: "28px",
            color: "#707070",
            margin: "0",
            maxWidth: "800px",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          Hands-on workshops · AI automation · AI development · AI strategy
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
