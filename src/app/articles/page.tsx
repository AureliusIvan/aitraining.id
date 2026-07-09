import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles: AI Agents & Tools Explained | AI Training Indonesia",
  description:
    "Penjelasan independen tentang tools dan konsep AI agent yang relevan untuk tim di Indonesia, ditulis oleh Aurelius Ivan Wijaya berdasarkan pengalaman pelatihan langsung.",
  keywords: ["artikel AI Indonesia", "apa itu OpenClaw", "AI agent explained"],
  alternates: { canonical: "https://aitraining.id/articles" },
  openGraph: { url: "https://aitraining.id/articles" },
};

export default function ArticlesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://aitraining.id" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://aitraining.id/articles" },
    ],
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI Training Indonesia Articles",
    description:
      "Penjelasan independen tentang tools dan konsep AI agent untuk tim di Indonesia.",
    url: "https://aitraining.id/articles",
    inLanguage: "id",
    author: {
      "@type": "Person",
      "@id": "https://aurelivan.com/#person",
      name: "Aurelius Ivan Wijaya",
      url: "https://aurelivan.com",
    },
    blogPost: articles.map((a) => ({
      "@type": "Article",
      headline: a.h1,
      description: a.metaDescription,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      url: `https://aitraining.id/articles/${a.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main>
          <section className="relative pt-32 pb-16 px-6 sm:px-8">
            <div className="max-w-[1400px] mx-auto">
              <nav aria-label="Breadcrumb" className="text-sm text-white/50 mb-8">
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Beranda
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white/70">Articles</span>
              </nav>
              <div className="max-w-3xl">
                <p className="text-white/70 text-sm mb-4 tracking-wide">[ Articles ]</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight mb-6">
                  <span className="text-white">Penjelasan independen</span>
                  <br />
                  <span className="text-white/60">tentang AI agent dan tools</span>
                </h1>
                <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Tulisan tentang tools dan konsep AI agent yang relevan untuk tim di
                  Indonesia, berdasarkan pengalaman pelatihan langsung Aurelius Ivan
                  Wijaya. Setiap artikel menyebutkan kredensial penulis untuk topik
                  yang dibahas secara spesifik.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 px-6 sm:px-8 border-t border-white/10">
            <div className="max-w-[1400px] mx-auto">
              {articles.length === 0 ? (
                <p className="text-white/70 text-lg">Belum ada artikel.</p>
              ) : (
                <div className="grid gap-6">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="group p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
                    >
                      <p className="text-white/40 text-xs tracking-wide mb-3">
                        [ {article.category} ]
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {article.h1}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {article.defId.a}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white/80 text-sm group-hover:text-white transition-colors">
                        Baca selengkapnya
                        <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
