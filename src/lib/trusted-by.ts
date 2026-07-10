// Single source of truth for the "Trusted By" logo grid, rendered on both
// the homepage (below TrainerSection) and /partners (below the 4 detailed
// partner cards). Keeping one array means both pages structurally cannot
// drift out of sync.
//
// Visible UI is logo-only (per Ivan's request): no visible name/caption
// text. Context lives in `alt` (accessible name, crawlable by AI search
// bots) and in the JSON-LD `description` field built by
// `buildTrustedBySchema()`. This is genuine accessible/structured-data
// markup, not hidden text aimed only at crawlers: every visitor gets the
// same HTML, sighted users just don't see it rendered.
//
// Honesty guardrails (do not loosen without Ivan's sign-off):
//  - n8n/Cursor/Build Club/HeyGen are the only genuine formal partnerships
//    (ambassador programs / community leadership): they link to their own
//    /partners/[slug] deep-dive page. Everyone else here is a client,
//    speaking engagement, or organization Ivan has worked with at some
//    level, linking out to their own official site instead.
//  - For orgs with no internal engagement record (Domainesia, Cakap, Ekipa,
//    Sagara Technology, Indonesia Product Conference, UMT, Telkom University,
//    Universitas Raharja), the caption stays deliberately generic ("organisasi
//    yang bekerja sama dengan Aurelius Ivan Wijaya") rather than claiming a
//    specific relationship (trained/spoke at/etc.) that isn't documented.
//  - MSIG Indonesia is a confirmed corporate AI training delivery (photo
//    proof at /assets/works/msig-indonesia-training.webp, added 2026-07-09).
//  - DPO&Co is an active internal AI training engagement (Claude Cowork;
//    content in build as of 2026-07-10, naming approved by Ivan 2026-07-10) —
//    caption upgraded from generic to the real engagement.
//  - Bukalapak is a won engagement (2026-07-07); delivery STARTS w/o 13 Jul
//    2026, so its caption describes the program, not a completed delivery.
//    Logo: official Bukalapak (2020) wordmark from Wikimedia Commons.
//  - Redcomm (GEO session, completed 2026): logo is Redcomm's own site brand
//    mark (red-website-icon.svg from redcomm.co.id) — they publish only the
//    icon monogram, no horizontal wordmark, so it renders small in the white
//    chip. Swap for a wordmark if one becomes available.
//  - AMIKOM is a confirmed-but-not-yet-delivered seminar invite; caption
//    uses "mengundang" (invited), not past/completed framing.

export type TrustedByItem = {
  src: string;
  alt: string;
  name: string;
  caption: string;
  href: string;
  schemaType?: "Organization" | "GovernmentOrganization" | "CollegeOrUniversity";
  // Optional per-logo chip background. Chips default to white (`bg-white/90`);
  // set this to a brand color (any CSS color, e.g. "#71075d") for logos that
  // are light/white and vanish on white. Applied as an inline style that
  // overrides the default white chip in both grids (homepage + /partners).
  bg?: string;
};

export const trustedBy: TrustedByItem[] = [
  {
    src: "/assets/clients/n8n.png",
    alt: "n8n: Aurelius Ivan Wijaya adalah Official n8n Ambassador Indonesia",
    name: "n8n",
    caption: "Official n8n Ambassador Indonesia",
    href: "/partners/n8n",
  },
  {
    src: "/assets/clients/cursor.webp",
    alt: "Cursor: Aurelius Ivan Wijaya adalah Cursor Ambassador Indonesia",
    name: "Cursor",
    caption: "Cursor Ambassador Indonesia",
    href: "/partners/cursor",
  },
  {
    src: "/assets/clients/build-club.webp",
    alt: "Build Club, partner komunitas AI builder",
    name: "Build Club",
    caption: "Partner komunitas AI builder",
    href: "/partners/build-club",
  },
  {
    src: "/assets/clients/heygen.png",
    alt: "HeyGen, partner AI video automation",
    name: "HeyGen",
    caption: "Partner AI video automation",
    href: "/partners/heygen",
  },
  {
    src: "/assets/clients/dpd-ri-full.png",
    alt: "DPD RI: Aurelius Ivan Wijaya melatih staf DPD RI dalam transformasi digital",
    name: "DPD RI",
    caption: "Pelatihan AI & transformasi digital untuk lembaga negara",
    href: "https://www.dpd.go.id",
    schemaType: "GovernmentOrganization",
  },
  {
    src: "/assets/clients/bayer.svg",
    alt: "PT Bayer Indonesia: corporate AI training oleh Aurelius Ivan Wijaya",
    name: "PT Bayer Indonesia",
    caption: "Corporate AI training, akhir 2025",
    href: "https://www.bayer.com",
  },
  {
    src: "/assets/clients/hacktiv8.png",
    alt: "Hacktiv8: workshop Agentic AI with n8n & Hermes oleh Aurelius Ivan Wijaya",
    name: "Hacktiv8",
    caption: "Workshop publik: Agentic AI with n8n & Hermes, Juni 2026",
    href: "https://hacktiv8.com",
  },
  {
    src: "/assets/clients/telkom-ai-connect.png",
    alt: "Telkom AI Connect: workshop AI Connect: From Idea to Content oleh Aurelius Ivan Wijaya di Bandung",
    name: "Telkom AI Connect",
    caption: "Workshop From Idea to Content, Bandung",
    href: "https://room.ai-connect.id/explore",
  },
  {
    src: "/assets/clients/jagoan-hosting.png",
    alt: "Jagoan Hosting: Aurelius Ivan Wijaya sebagai speaker peluncuran VM Ultra",
    name: "Jagoan Hosting",
    caption: "AI workshop & speaker peluncuran VM Ultra",
    href: "https://www.jagoanhosting.com",
  },
  {
    src: "/assets/clients/insignia.png",
    alt: "Insignia: corporate AI training, agent building cohort, oleh Aurelius Ivan Wijaya",
    name: "Insignia",
    caption: "Corporate AI training, agent building cohort",
    href: "https://insignia.co.id",
  },
  {
    src: "/assets/clients/bukalapak.svg",
    alt: "Bukalapak (PT Bukalapak.com Tbk): corporate AI training untuk tim Ops & Tech oleh Aurelius Ivan Wijaya",
    name: "Bukalapak",
    caption: "Corporate AI training, tim Ops & Tech",
    href: "https://www.bukalapak.com",
  },
  {
    src: "/assets/clients/redcomm.svg",
    alt: "Redcomm (Red Asia Group): GEO training oleh Aurelius Ivan Wijaya",
    name: "Redcomm",
    caption: "GEO training (Generative Engine Optimization)",
    href: "https://redcomm.co.id",
  },
  {
    src: "/assets/clients/poltekkes-banjarmasin.webp",
    alt: "Poltekkes Kemenkes Banjarmasin: Aurelius Ivan Wijaya sebagai Narasumber in-house training AI",
    name: "Poltekkes Kemenkes Banjarmasin",
    caption: "Narasumber in-house training AI",
    href: "https://poltekkes-banjarmasin.ac.id",
    schemaType: "CollegeOrUniversity",
    bg: "#0d5959", // Kemenkes teal brand bg — logo greens pop against it
  },
  {
    src: "/assets/clients/domainesia.png",
    alt: "Domainesia, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Domainesia",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://www.domainesia.com",
  },
  {
    src: "/assets/clients/cakap.svg",
    alt: "Cakap, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Cakap",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://cakap.com",
  },
  {
    src: "/assets/clients/ekipa.svg",
    alt: "Ekipa, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Ekipa",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://ekipa.co",
  },
  {
    src: "/assets/clients/msig.svg",
    alt: "MSIG Indonesia: corporate AI training hands-on Generative AI oleh Aurelius Ivan Wijaya",
    name: "MSIG Indonesia",
    caption: "Corporate AI training, sesi hands-on Generative AI",
    href: "https://www.msig.co.id/id",
  },
  {
    src: "/assets/clients/sagara-technology.png",
    alt: "Sagara Technology, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Sagara Technology",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://sagaratechnology.com/en",
    bg: "#000000", // white logo, invisible on white — use black bg
  },
  {
    src: "/assets/clients/dpoandco.jpeg",
    alt: "DPO&Co: internal AI training (Claude Cowork) oleh Aurelius Ivan Wijaya",
    name: "DPO&Co",
    caption: "Internal AI training tim (Claude Cowork)",
    href: "https://dpoandco.com",
  },
  {
    src: "/assets/clients/indonesia-product-conference.webp",
    alt: "Indonesia Product Conference, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Indonesia Product Conference",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://indonesiaproductconference.id",
    bg: "#71075d", // light logo, invisible on white — use its purple brand bg
  },
  {
    src: "/assets/clients/tech-in-asia-conf25.png",
    alt: "Tech in Asia: Aurelius Ivan Wijaya sebagai speaker di Tech in Asia Conference 2025",
    name: "Tech in Asia",
    caption: "Speaker di Tech in Asia Conference 2025",
    href: "https://www.techinasia.com",
  },
  {
    src: "/assets/clients/amikom.png",
    alt: "Universitas AMIKOM Yogyakarta mengundang Aurelius Ivan Wijaya untuk Seminar Nasional 'Human in the AI Era'",
    name: "Universitas AMIKOM Yogyakarta",
    caption: "Undangan Seminar Nasional 'Human in the AI Era'",
    href: "https://home.amikom.ac.id",
    schemaType: "CollegeOrUniversity",
    bg: "#4a1b9d", // light logo, invisible on white — use its indigo brand bg
  },
  {
    src: "/assets/clients/umt.png",
    alt: "Universitas Muhammadiyah Tangerang, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Universitas Muhammadiyah Tangerang",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://umt.ac.id",
    schemaType: "CollegeOrUniversity",
  },
  {
    src: "/assets/clients/telkom-university.png",
    alt: "Telkom University, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Telkom University",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://telkomuniversity.ac.id",
    schemaType: "CollegeOrUniversity",
  },
  {
    src: "/assets/clients/raharja.png",
    alt: "Universitas Raharja, organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    name: "Universitas Raharja",
    caption: "Organisasi yang bekerja sama dengan Aurelius Ivan Wijaya",
    href: "https://raharja.ac.id",
    schemaType: "CollegeOrUniversity",
  },
];

// Builds the ItemList JSON-LD for the external (non-/partners/[slug]) subset:
// the 4 formal partners already emit their own schema via /partners/[slug],
// so they're excluded here to avoid duplicating entity claims.
export function buildTrustedBySchema() {
  const external = trustedBy.filter((item) => !item.href.startsWith("/"));
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Organisasi yang telah dilatih, diajak kerja sama, atau menghadirkan Aurelius Ivan Wijaya sebagai speaker",
    itemListElement: external.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": item.schemaType ?? "Organization",
        name: item.name,
        url: item.href,
        description: item.caption,
      },
    })),
  };
}
