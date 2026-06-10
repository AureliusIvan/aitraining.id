import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Corporate AI Training Indonesia — aitraining.id by Aurelius Ivan Wijaya";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "88px",
              fontWeight: "bold",
              color: "white",
              margin: "0 0 32px 0",
              letterSpacing: "-0.05em",
            }}
          >
            aitraining.id
          </h1>
          <p
            style={{
              fontSize: "36px",
              color: "#a0a0a0",
              margin: "0 0 20px 0",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Corporate AI Training Indonesia
          </p>
          <p
            style={{
              fontSize: "28px",
              color: "#707070",
              margin: "0",
              maxWidth: "800px",
              lineHeight: 1.5,
            }}
          >
            Hands-on workshops · AI automation · AI development · AI strategy
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
