
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  blogArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/blog";

import ReadingProgress from "@/components/blog/article/ReadingProgress";
import ArticleHero from "@/components/blog/article/ArticleHero";
import ArticleTableOfContents from "@/components/blog/article/ArticleTableOfContents";
import ArticleBody from "@/components/blog/article/ArticleBody";
import ArticleAuthor from "@/components/blog/article/ArticleAuthor";
import RelatedArticles from "@/components/blog/article/RelatedArticles";
import ArticleCTA from "@/components/blog/article/ArticleCTA";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static pages for every published article
export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate SEO metadata for each article
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },

    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

// Article page
export default function ArticlePage({
  params,
}: PageProps) {
  return (
    <Suspense fallback={<ArticleLoading />}>
      {params.then(({ slug }) => (
        <ArticleContent slug={slug} />
      ))}
    </Suspense>
  );
}

// Article content component
function ArticleContent({ slug }: { slug: string }) {
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);

  return (
    <main className="min-h-screen bg-[#f7f5f0]">

      {/* Reading Progress */}
      <ReadingProgress />

      {/* Article Hero */}
      <ArticleHero
        title={article.title}
        category={article.category}
        description={article.description}
        image={article.image}
        author={article.author}
        date={article.date}
        readTime={article.readTime}
      />

      {/* Article Reading Layout */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:px-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-16">

        {/* Table of Contents */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <ArticleTableOfContents
            sections={article.sections}
          />
        </aside>

        {/* Article Content */}
        <div className="min-w-0">

          <ArticleBody>
            {article.content}
          </ArticleBody>

          {/* Article Author */}
          <div className="mt-14">
            <ArticleAuthor
              name={article.author}
            />
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <RelatedArticles
          articles={relatedArticles}
        />
      </section>

      {/* Consultation CTA */}
      <ArticleCTA />

    </main>
  );
}

// Loading fallback
function ArticleLoading() {
  return (
    <main className="min-h-screen bg-[#f7f5f0]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="animate-pulse space-y-6">

          <div className="h-4 w-32 rounded bg-[#172b3a]/10" />

          <div className="h-5 w-40 rounded bg-[#bd9143]/20" />

          <div className="h-12 max-w-3xl rounded bg-[#172b3a]/10" />

          <div className="h-5 max-w-2xl rounded bg-[#172b3a]/10" />

          <div className="mt-10 aspect-[16/7] w-full rounded-xl bg-[#172b3a]/10" />

        </div>
      </div>
    </main>
  );
}
