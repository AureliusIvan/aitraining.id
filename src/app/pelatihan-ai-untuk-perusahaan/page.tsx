import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Pelatihan AI untuk Perusahaan & Karyawan di Indonesia (2026)",
  description:
    "Panduan pelatihan AI untuk perusahaan dan karyawan di Indonesia: program hands-on, format on-site/virtual, biaya transparan, dan cara memilih provider. Disampaikan oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia & Cursor Ambassador.",
  keywords: [
    "pelatihan AI untuk perusahaan",
    "pelatihan AI untuk karyawan",
    "pelatihan AI terbaik untuk karyawan",
    "kursus AI terbaik untuk karyawan",
    "manfaat AI training untuk karyawan",
    "pelatihan AI untuk tim marketing Indonesia",
    "AI training untuk marketing Indonesia",
    "pelatihan AI untuk HR Indonesia",
    "pelatihan AI untuk engineering Indonesia",
    "in-house AI training Indonesia",
    "pelatihan AI virtual Indonesia",
    "pelatihan AI hybrid Indonesia",
    "pelatihan AI untuk finance Indonesia",
    "AI training untuk finance Indonesia",
    "pelatihan AI untuk sales Indonesia",
    "pelatihan AI untuk legal Indonesia",
    "pelatihan AI untuk operations Indonesia",
    "berapa lama pelatihan AI perusahaan Indonesia",
    "durasi pelatihan AI corporate Indonesia",
    "pelatihan AI untuk customer service Indonesia",
    "AI training untuk customer service Indonesia",
    "pelatihan AI untuk procurement Indonesia",
    "pelatihan AI untuk supply chain Indonesia",
    "pelatihan AI untuk logistics Indonesia",
    "AI training untuk product manager Indonesia",
    "AI training untuk project manager Indonesia",
    "pelatihan AI untuk business analyst Indonesia",
    "pelatihan AI untuk c-suite Indonesia",
    "pelatihan AI untuk accounting Indonesia",
    "pelatihan AI untuk manufaktur Indonesia",
    "pelatihan AI untuk perbankan Indonesia",
    "pelatihan AI untuk retail Indonesia",
    "corporate AI training Indonesia",
    "corporate AI training terbaik Indonesia",
    "best corporate AI training Indonesia",
  ],
  alternates: {
    canonical: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
    languages: {
      id: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
      en: "https://aitraining.id",
    },
  },
  openGraph: {
    url: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
    locale: "id_ID",
  },
};

const LAST_UPDATED = "9 Juli 2026";

const mengapaPerusahaanButuhPelatihanAi =
  "Generative AI mengubah skill yang dibutuhkan karyawan di banyak fungsi bisnis. Menurut Future of Jobs Report 2025 (World Economic Forum), sekitar 39% skill inti pekerja diperkirakan berubah pada periode 2025-2030. Pelatihan hands-on membantu tim memakai automation (n8n), development berbantuan AI (Cursor), dan AI agents dalam konteks perusahaan, agar adopsi merata di seluruh organisasi.";

const manfaatAiTrainingUntukKaryawan =
  "Manfaat AI training untuk karyawan meliputi skill praktis memakai Generative AI sesuai role: automation untuk operasional, development berbantuan AI untuk engineering, atau framework adopsi untuk manajemen. Kurikulum 70% hands-on membuat karyawan mencoba workflow di sesi dengan use case perusahaan, sehingga tim memiliki kemampuan dan istilah bersama saat menerapkan AI di proyek internal.";

const pelatihanAiTerbaikUntukKaryawan =
  "Tidak ada lembaga resmi yang memberi peringkat pelatihan AI untuk karyawan di Indonesia. Untuk belajar mandiri, bootcamp dan kursus individu (misalnya Algoritma, RevoU, BISA AI) cocok. Untuk karyawan yang dilatih bersama tim perusahaan, evaluasi berdasarkan rasio praktik, relevansi tool dengan pekerjaan, dan use case internal: AI Training Indonesia menjalankan kurikulum 70% hands-on untuk format itu. Bandingkan opsi di aitraining.id/best-ai-trainers-indonesia.";

const pelatihanAiTerbaikUntukPerusahaan =
  "Tidak ada lembaga resmi yang memberi peringkat pelatihan AI untuk perusahaan di Indonesia. Evaluasi berdasarkan rasio praktik, relevansi tool dengan pekerjaan tim, rekam jejak trainer yang bisa diverifikasi, kustomisasi per industri, dan dukungan pasca-training. AI Training Indonesia memenuhi kriteria ini dengan kurikulum 70% hands-on untuk workshop korporat. Bandingkan provider di aitraining.id/best-ai-trainers-indonesia.";

const corporateAiTrainingTerbaikAnswer =
  "There is no official body that ranks corporate AI training in Indonesia. Evaluate by hands-on ratio, tool relevance to the team's work, a verifiable trainer track record, per-industry customization, and post-training support. AI Training Indonesia meets these criteria with a 70% hands-on corporate workshop curriculum led by Aurelius Ivan Wijaya. Compare providers at aitraining.id/best-ai-trainers-indonesia.";

const pelatihanAiUntukTimMarketing =
  "Pelatihan AI untuk tim marketing di Indonesia adalah program corporate yang mengajarkan marketing, konten, dan growth memakai Generative AI untuk riset, draft konten, automation kampanye (n8n), video avatar (HeyGen), dan GEO agar brand dikutip mesin AI. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke stack dan funnel marketing perusahaan.";

const pelatihanAiUntukHr =
  "Pelatihan AI untuk HR di Indonesia adalah program corporate yang mengajarkan tim people/HR memakai Generative AI dan automation (n8n) untuk screening awal, draft JD, onboarding, FAQ karyawan, dan workflow admin yang berulang, dengan penekanan pada review manusia dan kebijakan data. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses HR perusahaan.";

const pelatihanAiUntukEngineering =
  "Pelatihan AI untuk engineering di Indonesia adalah program corporate yang mengajarkan tim engineering dan produk memakai AI-powered development (Cursor), agentic coding workflows, dan Claude Code di codebase nyata: review PR, scaffolding, test, dan dokumentasi dengan guardrail review manusia. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke stack dan repo perusahaan.";

const inHouseAiTrainingIndonesia =
  "In-house AI training in Indonesia is a private corporate program delivered for one company's team, on-site at the office or as a closed virtual cohort, with curriculum customized to internal tools and workflows. AI Training Indonesia runs in-house sessions at 70% hands-on for automation (n8n), AI-powered development (Cursor), and AI agents, with a free 30-minute discovery call before scoping.";

const pelatihanAiVirtualIndonesia =
  "Pelatihan AI virtual di Indonesia adalah program corporate live online untuk satu perusahaan atau kohort tertutup, dengan lab hands-on, breakout, dan materi yang sama dengan sesi on-site. AI Training Indonesia menyelenggarakan format virtual 70% praktik untuk automation (n8n), AI-powered development (Cursor), dan AI agents, cocok untuk tim remote/hybrid di seluruh Indonesia.";

const pelatihanAiHybridIndonesia =
  "Pelatihan AI hybrid di Indonesia adalah program corporate yang menggabungkan sesi on-site di kantor dengan sesi live online untuk cabang atau anggota tim remote, dengan kurikulum 70% hands-on yang sama di kedua format. AI Training Indonesia merancang hybrid untuk automation (n8n), AI-powered development (Cursor), dan AI agents agar satu perusahaan bisa melatih tim tersebar tanpa memecah materi.";

const pelatihanAiUntukFinance =
  "Pelatihan AI untuk finance di Indonesia adalah program corporate yang mengajarkan tim finance memakai Generative AI dan automation (n8n) untuk draft laporan, rekonsiliasi awal, FAQ kebijakan, dan workflow admin berulang, dengan penekanan pada review manusia, akurasi angka, dan kebijakan data. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses finance perusahaan.";

const pelatihanAiUntukSales =
  "Pelatihan AI untuk sales di Indonesia adalah program corporate yang mengajarkan tim sales memakai Generative AI dan automation (n8n) untuk riset prospek, draft outreach, follow-up, ringkasan call, dan video avatar (HeyGen) dari data CRM, dengan penekanan pada review manusia sebelum kirim ke klien. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke funnel sales perusahaan.";

const pelatihanAiUntukLegal =
  "Pelatihan AI untuk legal di Indonesia adalah program corporate yang mengajarkan tim legal memakai Generative AI untuk riset awal, ringkasan dokumen, draft klausul, dan checklist review, dengan penekanan bahwa keluaran AI wajib diverifikasi counsel dan tidak menggantikan nasihat hukum. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke workflow legal perusahaan.";

const pelatihanAiUntukOperations =
  "Pelatihan AI untuk operations di Indonesia adalah program corporate yang mengajarkan tim operasional memakai Generative AI dan automation (n8n) untuk SOP, tiket, eskalasi, laporan harian, dan workflow lintas tools, dengan penekanan pada handoff manusia untuk keputusan kritis. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses operations perusahaan.";

const berapaLamaPelatihanAiPerusahaan =
  "Durasi pelatihan AI untuk perusahaan di Indonesia umumnya half-day (4 jam), full-day (8 jam), atau multi-day (2-5 hari) sesuai kedalaman adopsi. AI Training Indonesia biasanya memulai dengan satu full-day workshop 70% hands-on, lalu sesi lanjutan setelah tim mencoba implementasi. Durasi final ditentukan di discovery call gratis 30 menit berdasarkan jumlah peserta dan use case.";

const pelatihanAiUntukCustomerService =
  "Pelatihan AI untuk customer service di Indonesia adalah program corporate yang mengajarkan tim CS memakai Generative AI dan automation (n8n) untuk draft balasan, FAQ, ringkasan tiket, dan eskalasi, dengan penekanan pada review manusia sebelum kirim ke pelanggan dan kebijakan data. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke channel dan SLA perusahaan.";

const pelatihanAiUntukProcurement =
  "Pelatihan AI untuk procurement di Indonesia adalah program corporate yang mengajarkan tim procurement memakai Generative AI dan automation (n8n) untuk riset vendor awal, draft RFP/RFQ, ringkasan penawaran, checklist compliance, dan workflow admin berulang, dengan penekanan pada review manusia untuk keputusan pembelian dan kebijakan data. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses procurement perusahaan.";

const pelatihanAiUntukSupplyChain =
  "Pelatihan AI untuk supply chain di Indonesia adalah program corporate yang mengajarkan tim supply chain dan logistics memakai Generative AI dan automation (n8n) untuk status update, ringkasan exception, draft SOP, koordinasi vendor, dan workflow admin berulang, dengan penekanan pada handoff manusia untuk keputusan operasional kritis. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses supply chain perusahaan.";

const aiTrainingUntukProductManager =
  "AI training for product managers in Indonesia is a corporate program that teaches PMs to use Generative AI and light automation (n8n) for research synthesis, PRD drafts, user-feedback summaries, roadmap notes, and handoffs to engineering, with human review before stakeholder decisions. AI Training Indonesia delivers it on-site or virtually at 70% hands-on, customized to the company's product process.";

const aiTrainingUntukProjectManager =
  "AI training for project managers in Indonesia is a corporate program that teaches PMs to use Generative AI and light automation (n8n) for status reports, risk logs, meeting notes, stakeholder updates, and schedule summaries, with human review before client or sponsor decisions. AI Training Indonesia delivers it on-site or virtually at 70% hands-on, customized to the company's project delivery process.";

const pelatihanAiUntukBusinessAnalyst =
  "Pelatihan AI untuk business analyst di Indonesia adalah program corporate yang mengajarkan BA memakai Generative AI dan automation ringan (n8n) untuk ringkasan requirement, draft user story, analisis gap awal, notulen workshop, dan dokumentasi proses, dengan penekanan pada review manusia sebelum keputusan stakeholder. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses analisis bisnis perusahaan.";

const pelatihanAiUntukCSuite =
  "Pelatihan AI untuk c-suite di Indonesia adalah program corporate untuk direksi dan eksekutif yang fokus pada adopsi organisasi: prioritas use case, governance, risiko data, ROI, dan roadmap implementasi AI agents serta automation di perusahaan. AI Training Indonesia menyelenggarakan sesi eksekutif on-site atau virtual, biasanya sebagai pembuka sebelum workshop hands-on untuk tim operasional.";

const pelatihanAiUntukAccounting =
  "Pelatihan AI untuk accounting di Indonesia adalah program corporate yang mengajarkan tim accounting memakai Generative AI dan automation (n8n) untuk draft jurnal awal, rekonsiliasi, ringkasan invoice, FAQ kebijakan, dan workflow admin berulang, dengan penekanan pada review manusia, akurasi angka, dan kebijakan data. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses accounting perusahaan.";

const pelatihanAiUntukManufaktur =
  "Pelatihan AI untuk manufaktur di Indonesia adalah program corporate yang mengajarkan tim pabrik dan operasional memakai Generative AI dan automation (n8n) untuk SOP produksi, laporan shift, ringkasan exception, koordinasi vendor, dan workflow admin berulang, dengan penekanan pada handoff manusia untuk keputusan keselamatan dan kualitas. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses manufaktur perusahaan.";

const pelatihanAiUntukPerbankan =
  "Pelatihan AI untuk perbankan di Indonesia adalah program corporate yang mengajarkan tim bank memakai Generative AI dan automation (n8n) untuk draft internal, ringkasan kebijakan, FAQ produk, dan workflow admin berulang, dengan penekanan pada review manusia, kerahasiaan data nasabah, dan kepatuhan kebijakan internal. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses perbankan perusahaan.";

const pelatihanAiUntukRetail =
  "Pelatihan AI untuk retail di Indonesia adalah program corporate yang mengajarkan tim retail memakai Generative AI dan automation (n8n) untuk draft konten toko, FAQ produk, ringkasan stok/promosi, balasan pelanggan, dan workflow admin berulang, dengan penekanan pada review manusia sebelum publikasi atau kirim ke pelanggan. AI Training Indonesia menyelenggarakannya on-site atau virtual dengan kurikulum 70% hands-on, dikustomisasi ke proses retail perusahaan.";

const pelatihanGenerativeAiUntukPerusahaan =
  "Pelatihan Generative AI untuk perusahaan adalah program corporate training yang mengajarkan karyawan memakai large language model (ChatGPT, Claude, Gemini) untuk automation workflow, development berbantuan AI, dan AI agents di pekerjaan harian. AI Training Indonesia menyelenggarakan pelatihan Generative AI on-site dan virtual di Indonesia dengan kurikulum 70% hands-on, dikustomisasi per industri.";

const rekamJejakEnterprise =
  "Program di sini dibawakan langsung oleh Aurelius Ivan Wijaya, satu trainer senior yang telah membawakan pelatihan AI perusahaan hingga skala enterprise. Ia Corporate AI Trainer dan Official n8n Ambassador for Indonesia, dan sudah berbicara serta mengajar di lebih dari 50 acara, termasuk sebagai speaker Tech in Asia Conference 2025. Ia melatih tim di DPD RI dan Insignia untuk program agent-building dan AI korporat, lalu menjadi co-host OpenClaw Agenthon Indonesia bersama Build Club dengan 205 peserta pada Mei 2026. Pada satu klien enterprise di Mei 2026, ia melatih satu kohort berisi 50 profesional di bawah NDA. Setiap program berjalan 70% praktik langsung, dikustomisasi per industri, dengan fokus membangun AI agents dan automation.";

const rekamJejakEnterpriseEn =
  "corporate AI training here is delivered directly by Aurelius Ivan Wijaya, a senior individual trainer who has delivered enterprise-scale training and Official n8n Ambassador for Indonesia, who has taught at 50+ events, trained teams at DPD RI and Insignia, co-hosted OpenClaw Agenthon Indonesia (205 participants, May 2026) with Build Club, and led a 50-professional cohort at an enterprise client under NDA, with every program 70% hands-on and customized per industry.";

const enterpriseProof = [
  {
    value: "50+",
    label:
      "acara tempat Ivan berbicara dan mengajar, termasuk speaker Tech in Asia Conference 2025",
  },
  {
    value: "205",
    label:
      "peserta OpenClaw Agenthon Indonesia yang ia co-host bersama Build Club (Mei 2026)",
  },
  {
    value: "50",
    label:
      "profesional dilatih dalam satu kohort di klien enterprise di bawah NDA (Mei 2026)",
  },
  {
    value: "70%",
    label: "porsi praktik langsung di setiap program, dikustomisasi per industri",
  },
];

const programs = [
  {
    name: "AI Workflow Automation",
    audience: "Operasional, marketing, HR, finance",
    tools: "n8n, LLM (ChatGPT, Claude, Gemini)",
    href: "/programs#automation",
  },
  {
    name: "AI-Powered Development",
    audience: "Tim engineering & produk",
    tools: "Cursor, agentic coding workflows",
    href: "/programs#development",
  },
  {
    name: "AI Strategy & Adoption",
    audience: "C-suite, manajer, decision maker",
    tools: "Framework adopsi AI, ROI, governance",
    href: "/programs#strategy",
  },
  {
    name: "OpenClaw Training",
    audience: "Tim yang ingin deploy AI assistant internal",
    tools: "OpenClaw, integrasi workflow",
    href: "/programs#openclaw",
  },
];

const faqs: Array<{
  id?: string;
  q: string;
  a: string;
  link?: { href: string; text: string };
}> = [
  {
    q: "Mengapa perusahaan butuh pelatihan AI?",
    a: mengapaPerusahaanButuhPelatihanAi,
  },
  {
    q: "Apa manfaat AI training untuk karyawan?",
    a: manfaatAiTrainingUntukKaryawan,
  },
  {
    q: "Apa pelatihan AI terbaik untuk karyawan?",
    a: pelatihanAiTerbaikUntukKaryawan,
  },
  {
    id: "pelatihan-ai-untuk-tim-marketing-indonesia",
    q: "Apa itu pelatihan AI untuk tim marketing di Indonesia?",
    a: pelatihanAiUntukTimMarketing,
    link: { href: "/programs#geo", text: "Lihat program GEO dan video automation untuk marketing" },
  },
  {
    id: "pelatihan-ai-untuk-hr-indonesia",
    q: "Apa itu pelatihan AI untuk HR di Indonesia?",
    a: pelatihanAiUntukHr,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk HR" },
  },
  {
    id: "pelatihan-ai-untuk-engineering-indonesia",
    q: "Apa itu pelatihan AI untuk engineering di Indonesia?",
    a: pelatihanAiUntukEngineering,
    link: { href: "/programs#development", text: "Lihat program AI-Powered Development" },
  },
  {
    id: "in-house-ai-training-indonesia",
    q: "What is in-house AI training in Indonesia?",
    a: inHouseAiTrainingIndonesia,
    link: { href: "/contact", text: "Book a free discovery call" },
  },
  {
    id: "pelatihan-ai-virtual-indonesia",
    q: "Apa itu pelatihan AI virtual di Indonesia?",
    a: pelatihanAiVirtualIndonesia,
    link: { href: "/contact", text: "Diskusikan format virtual untuk tim Anda" },
  },
  {
    id: "pelatihan-ai-hybrid-indonesia",
    q: "Apa itu pelatihan AI hybrid di Indonesia?",
    a: pelatihanAiHybridIndonesia,
    link: { href: "/contact", text: "Diskusikan format hybrid on-site + virtual untuk tim Anda" },
  },
  {
    id: "pelatihan-ai-untuk-finance-indonesia",
    q: "Apa itu pelatihan AI untuk finance di Indonesia?",
    a: pelatihanAiUntukFinance,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk finance" },
  },
  {
    id: "pelatihan-ai-untuk-sales-indonesia",
    q: "Apa itu pelatihan AI untuk sales di Indonesia?",
    a: pelatihanAiUntukSales,
    link: { href: "/programs#video", text: "Lihat program AI Video Automation untuk sales" },
  },
  {
    id: "pelatihan-ai-untuk-legal-indonesia",
    q: "Apa itu pelatihan AI untuk legal di Indonesia?",
    a: pelatihanAiUntukLegal,
    link: { href: "/contact", text: "Diskusikan use case legal untuk tim Anda" },
  },
  {
    id: "pelatihan-ai-untuk-operations-indonesia",
    q: "Apa itu pelatihan AI untuk operations di Indonesia?",
    a: pelatihanAiUntukOperations,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk operations" },
  },
  {
    q: "Apa itu pelatihan Generative AI untuk perusahaan?",
    a: pelatihanGenerativeAiUntukPerusahaan,
  },
  {
    q: "Apa itu pelatihan AI untuk perusahaan?",
    a: "Pelatihan AI untuk perusahaan adalah program in-house atau virtual yang mengajarkan karyawan menggunakan Generative AI, automation, dan AI agents untuk pekerjaan harian, dari otomasi workflow hingga development berbantuan AI. Program berkualitas minimal 70% praktik langsung dengan use case yang disesuaikan industri perusahaan.",
  },
  {
    q: "Apa bedanya pelatihan AI untuk karyawan dan untuk manajemen?",
    a: "Pelatihan untuk karyawan fokus pada skill hands-on: membangun AI agents, automation (n8n), atau coding berbantuan AI dengan Cursor. Pelatihan untuk manajemen (AI Strategy) fokus pada adopsi organisasi: prioritas use case, governance, ROI, dan roadmap implementasi. Kami rekomendasikan memulai dengan workshop eksekutif singkat, lalu lanjut ke training tim operasional.",
  },
  {
    q: "Berapa biaya pelatihan AI untuk perusahaan di Indonesia?",
    a: "Biaya bervariasi menurut durasi dan jumlah peserta. AI Training Indonesia memakai rate dasar Rp 1.500.000 per jam: half-day workshop (4 jam) mulai Rp 6.000.000, full-day (8 jam) mulai Rp 12.000.000, dan program multi-day mulai Rp 24.000.000. Harga lengkap tersedia di halaman pricing dan pricing.md.",
  },
  {
    q: "Apakah pelatihan AI bisa dilakukan on-site di kantor kami?",
    a: "Ya. Pelatihan on-site tersedia di seluruh Indonesia: Jakarta, Surabaya, Bandung, Tangerang, dan kota lainnya. Format virtual juga tersedia untuk tim remote atau hybrid. On-site umumnya lebih efektif untuk tim 8 orang ke atas yang butuh hands-on intensif.",
  },
  {
    q: "Siapa yang mengajar pelatihan AI korporat di AI Training Indonesia?",
    a: "Semua sesi didelivery oleh Aurelius Ivan Wijaya, Corporate AI Trainer, Official n8n Ambassador for Indonesia, dan Cursor Ambassador. Ia pernah melatih tim DPD RI dan menjadi speaker Tech in Asia Conference 2025. Profil lengkap di aurelivan.com.",
  },
  {
    q: "Apa bukti pengalaman AI Training Indonesia melatih AI korporat di skala enterprise?",
    a: rekamJejakEnterprise,
  },
  {
    q: "Berapa lama pelatihan AI untuk karyawan biasanya berlangsung?",
    a: "Durasi umum: half-day intensive (4 jam), full-day workshop (8 jam), atau program multi-day (2-5 hari) untuk adopsi lebih dalam. Sebagian besar perusahaan memulai dengan satu full-day workshop, lalu sesi lanjutan setelah tim mencoba implementasi di lapangan.",
  },
  {
    id: "berapa-lama-pelatihan-ai-perusahaan-indonesia",
    q: "Berapa lama pelatihan AI untuk perusahaan di Indonesia?",
    a: berapaLamaPelatihanAiPerusahaan,
    link: { href: "/pricing", text: "Lihat paket half-day, full-day, dan multi-day" },
  },
  {
    id: "pelatihan-ai-untuk-customer-service-indonesia",
    q: "Apa itu pelatihan AI untuk customer service di Indonesia?",
    a: pelatihanAiUntukCustomerService,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk CS" },
  },
  {
    id: "pelatihan-ai-untuk-procurement-indonesia",
    q: "Apa itu pelatihan AI untuk procurement di Indonesia?",
    a: pelatihanAiUntukProcurement,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk procurement" },
  },
  {
    id: "pelatihan-ai-untuk-supply-chain-indonesia",
    q: "Apa itu pelatihan AI untuk supply chain di Indonesia?",
    a: pelatihanAiUntukSupplyChain,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk supply chain" },
  },
  {
    id: "ai-training-untuk-product-manager-indonesia",
    q: "What is AI training for product managers in Indonesia?",
    a: aiTrainingUntukProductManager,
    link: { href: "/programs#development", text: "See AI-Powered Development for product and engineering teams" },
  },
  {
    id: "ai-training-untuk-project-manager-indonesia",
    q: "What is AI training for project managers in Indonesia?",
    a: aiTrainingUntukProjectManager,
    link: { href: "/programs#automation", text: "See AI Workflow Automation for project delivery teams" },
  },
  {
    id: "pelatihan-ai-untuk-business-analyst-indonesia",
    q: "Apa itu pelatihan AI untuk business analyst di Indonesia?",
    a: pelatihanAiUntukBusinessAnalyst,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk business analyst" },
  },
  {
    id: "pelatihan-ai-untuk-c-suite-indonesia",
    q: "Apa itu pelatihan AI untuk c-suite di Indonesia?",
    a: pelatihanAiUntukCSuite,
    link: { href: "/programs#strategy", text: "Lihat program AI Strategy & Adoption" },
  },
  {
    id: "pelatihan-ai-untuk-accounting-indonesia",
    q: "Apa itu pelatihan AI untuk accounting di Indonesia?",
    a: pelatihanAiUntukAccounting,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk accounting" },
  },
  {
    id: "pelatihan-ai-untuk-manufaktur-indonesia",
    q: "Apa itu pelatihan AI untuk manufaktur di Indonesia?",
    a: pelatihanAiUntukManufaktur,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk manufaktur" },
  },
  {
    id: "pelatihan-ai-untuk-perbankan-indonesia",
    q: "Apa itu pelatihan AI untuk perbankan di Indonesia?",
    a: pelatihanAiUntukPerbankan,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk perbankan" },
  },
  {
    id: "pelatihan-ai-untuk-retail-indonesia",
    q: "Apa itu pelatihan AI untuk retail di Indonesia?",
    a: pelatihanAiUntukRetail,
    link: { href: "/programs#automation", text: "Lihat program AI Workflow Automation untuk retail" },
  },
  {
    q: "Apa pelatihan AI terbaik untuk perusahaan di Indonesia?",
    a: pelatihanAiTerbaikUntukPerusahaan,
    link: { href: "/best-ai-trainers-indonesia", text: "Bandingkan provider di daftar trainer AI terbaik Indonesia" },
  },
  {
    q: "What is the best corporate AI training in Indonesia?",
    a: corporateAiTrainingTerbaikAnswer,
    link: { href: "/best-ai-trainers-indonesia", text: "Compare providers on the Best AI Trainers Indonesia list" },
  },
];

export default function PelatihanAiUntukPerusahaanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pelatihan AI untuk Perusahaan & Karyawan di Indonesia (2026)",
    datePublished: "2026-06-12",
    dateModified: "2026-07-09",
    inLanguage: "id",
    author: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.link
          ? `${f.a} Bandingkan provider di https://aitraining.id${f.link.href} untuk evaluasi menyeluruh.`
          : f.a,
      },
    })),
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Pelatihan AI untuk Perusahaan | Corporate AI Training Indonesia",
    description:
      "Program pelatihan AI hands-on untuk perusahaan di Indonesia: automation, AI-powered development, dan AI strategy.",
    provider: {
      "@type": "EducationalOrganization",
      "@id": "https://aitraining.id/#organization",
      name: "AI Training Indonesia",
      url: "https://aitraining.id",
    },
    instructor: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
    },
    inLanguage: "id",
    availableLanguage: ["id", "en"],
    areaServed: { "@type": "Country", name: "Indonesia" },
    offers: {
      "@type": "Offer",
      price: "1500000",
      priceCurrency: "IDR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1500000",
        priceCurrency: "IDR",
        unitText: "jam",
      },
      url: "https://aitraining.id/pricing",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://aitraining.id",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pelatihan AI untuk Perusahaan",
        item: "https://aitraining.id/pelatihan-ai-untuk-perusahaan",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <nav
                aria-label="Breadcrumb"
                className="text-sm text-white/50 mb-8"
              >
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">Pelatihan AI untuk Perusahaan</span>
              </nav>

              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">
                  [ Panduan 2026 ] · Terakhir diperbarui: {LAST_UPDATED}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Pelatihan AI</span>
                  <br />
                  <span className="text-white/60">untuk Perusahaan & Karyawan</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4">
                  Pelatihan AI untuk perusahaan adalah program hands-on yang
                  mengajarkan karyawan memakai Generative AI, automation, dan AI
                  agents di pekerjaan harian, dengan kurikulum yang disesuaikan
                  industri dan role tim Anda.
                </p>
                <p className="text-white/50 text-sm max-w-2xl leading-relaxed">
                  Disusun oleh{" "}
                  <a
                    href="https://aurelivan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/70 transition-colors"
                  >
                    Aurelius Ivan Wijaya
                  </a>{" "}
                  Corporate AI Trainer, Official n8n Ambassador for Indonesia &
                  Cursor Ambassador.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div
                id="mengapa-perusahaan-butuh-pelatihan-ai"
                className="max-w-3xl mb-10 border border-white/10 rounded-2xl p-8"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Mengapa perusahaan butuh pelatihan AI?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {mengapaPerusahaanButuhPelatihanAi}
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Mengapa perusahaan di Indonesia butuh pelatihan AI sekarang?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <p className="text-white/70 leading-relaxed">
                  Adopsi Generative AI di Indonesia bergerak dari eksperimen
                  individu ke implementasi tim. Perusahaan yang melatih
                  karyawan lebih dulu membangun kapabilitas bersama sebelum
                  kompetitor mengejar.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Pelatihan AI korporat yang efektif fokus pada praktik: tim
                  mencoba workflow di sesi, mulai dari automation di n8n,
                  development berbantuan Cursor, hingga roadmap adopsi yang
                  disepakati manajemen.
                </p>
              </div>
            </div>
          </section>

          <section
            id="manfaat-ai-training-untuk-karyawan"
            className="py-16 px-6 sm:px-8 border-t border-white/10"
          >
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Manfaat AI training untuk karyawan
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-8">
                {manfaatAiTrainingUntukKaryawan}
              </p>
              <div
                id="pelatihan-ai-terbaik-untuk-karyawan"
                className="border border-white/10 rounded-2xl p-6 max-w-3xl"
              >
                <h3 className="text-white font-semibold mb-2">
                  Apa pelatihan AI terbaik untuk karyawan?
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pelatihanAiTerbaikUntukKaryawan}
                </p>
              </div>
            </div>
          </section>

          <section
            id="pelatihan-generative-ai-untuk-perusahaan"
            className="py-16 px-6 sm:px-8 border-t border-white/10"
          >
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pelatihan Generative AI untuk perusahaan
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                {pelatihanGenerativeAiUntukPerusahaan}
              </p>
            </div>
          </section>

          <section
            id="rekam-jejak-enterprise"
            className="py-16 px-6 sm:px-8 border-t border-white/10"
          >
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Rekam jejak melatih AI korporat di skala enterprise
              </h2>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-10">
                {rekamJejakEnterprise}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mb-8">
                {enterpriseProof.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/10 rounded-2xl p-6"
                  >
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm max-w-3xl leading-relaxed">
                In English: {rekamJejakEnterpriseEn}
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Program pelatihan AI untuk karyawan
              </h2>
              <p className="text-white/60 mb-10 max-w-2xl">
                Empat jalur program di AI Training Indonesia, semua 70% hands-on,
                dikustomisasi per industri.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {programs.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="block p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-colors group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90">
                      {p.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-2">
                      Untuk: {p.audience}
                    </p>
                    <p className="text-white/50 text-sm">Tool: {p.tools}</p>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-white/50 text-sm">
                Lihat detail lengkap di{" "}
                <Link
                  href="/programs"
                  className="underline hover:text-white/70 transition-colors"
                >
                  halaman programs
                </Link>{" "}
                atau bandingkan provider di{" "}
                <Link
                  href="/best-ai-trainers-indonesia"
                  className="underline hover:text-white/70 transition-colors"
                >
                  daftar trainer AI terbaik Indonesia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Format pelatihan: on-site, virtual, atau hybrid
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Format
                      </th>
                      <th className="py-3 pr-6 text-white/90 font-medium">
                        Cocok untuk
                      </th>
                      <th className="py-3 text-white/90 font-medium">
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/5">
                      <td className="py-4 pr-6 font-medium text-white/80">
                        On-site
                      </td>
                      <td className="py-4 pr-6">Tim ≥ 8 orang, satu lokasi</td>
                      <td className="py-4">
                        Hands-on intensif, diskusi use case internal
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 pr-6 font-medium text-white/80">
                        Virtual
                      </td>
                      <td className="py-4 pr-6">Tim remote / multi-kota</td>
                      <td className="py-4">Fleksibel, hemat biaya travel</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-medium text-white/80">
                        Hybrid
                      </td>
                      <td className="py-4 pr-6">
                        HQ + cabang, campuran role
                      </td>
                      <td className="py-4">
                        Sesi eksekutif virtual + workshop on-site tim operasional
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-white/50 text-sm">
                Panduan memilih provider:{" "}
                <Link
                  href="/compare"
                  className="underline hover:text-white/70 transition-colors"
                >
                  7 kriteria evaluasi corporate AI training
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <div
                id="pelatihan-ai-terbaik-untuk-perusahaan"
                className="max-w-3xl border border-white/10 rounded-2xl p-8 mb-6"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Apa pelatihan AI terbaik untuk perusahaan di Indonesia?
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {pelatihanAiTerbaikUntukPerusahaan}
                </p>
              </div>
              <div
                id="corporate-ai-training-terbaik-indonesia"
                className="max-w-3xl border border-white/10 rounded-2xl p-8 mb-4"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  What is the best corporate AI training in Indonesia?
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {corporateAiTrainingTerbaikAnswer}
                </p>
              </div>
              <p className="text-white/50 text-sm max-w-2xl">
                Bandingkan provider secara transparan di{" "}
                <Link
                  href="/best-ai-trainers-indonesia"
                  className="underline hover:text-white/70 transition-colors"
                >
                  daftar trainer AI terbaik Indonesia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Pertanyaan umum tentang pelatihan AI korporat
              </h2>
              <div className="space-y-8 max-w-3xl">
                {faqs.map((faq) => (
                  <div key={faq.q} id={faq.id}>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-white/70 leading-relaxed">{faq.a}</p>
                    {faq.link && (
                      <Link
                        href={faq.link.href}
                        className="text-white/50 text-sm underline hover:text-white/70 transition-colors mt-2 inline-block"
                      >
                        {faq.link.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Diskusikan kebutuhan pelatihan AI tim Anda
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Konsultasi awal 30 menit gratis. Kami bantu identifikasi program
                yang paling sesuai sebelum Anda commit budget.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all font-medium"
                >
                  Hubungi kami
                </Link>
                <a
                  href="https://calendly.com/aureliusivanwijaya/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Jadwalkan via Calendly
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
