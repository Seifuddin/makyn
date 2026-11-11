
import { ReactNode } from "react";

type ArticleBodyProps = {
  children: ReactNode;
};

export default function ArticleBody({
  children,
}: ArticleBodyProps) {
  return (
    <article
      className="
        min-w-0 w-full max-w-none
        text-[#172b3a]/80
        [&_h2]:mb-5
        [&_h2]:font-serif
        [&_h2]:mt-12
        [&_h2]:scroll-mt-28
        [&_h2]:text-2xl
        [&_h2]:font-bold
        [&_h2]:leading-tight
        [&_h2]:tracking-tight
        [&_h2]:text-[#172b3a]
        [&_h3]:mb-3
        [&_h3]:font-serif
        [&_h3]:mt-8
        [&_h3]:text-xl
        [&_h3]:font-bold
        [&_h3]:text-[#172b3a]
        [&_p]:mb-6
        [&_p]:text-[15px]
        [&_p]:leading-[1.95]
        [&_ul]:mb-7
        [&_ul]:list-disc
        [&_ul]:space-y-3
        [&_ul]:pl-6
        [&_ol]:mb-7
        [&_ol]:list-decimal
        [&_ol]:space-y-3
        [&_ol]:pl-6
        [&_li]:pl-1
        [&_strong]:font-bold
        [&_strong]:text-[#172b3a]
        [&_a]:font-semibold
        [&_a]:text-[#bd9143]
        [&_a]:underline
        [&_a]:underline-offset-4
        [&_blockquote]:my-9
        [&_blockquote]:border-l-4
        [&_blockquote]:border-[#bd9143]
        [&_blockquote]:bg-white
        [&_blockquote]:px-6
        [&_blockquote]:py-5
        [&_blockquote]:text-lg
        [&_blockquote]:font-medium
        [&_blockquote]:italic
        [&_blockquote]:leading-relaxed
        [&_blockquote]:text-[#172b3a]
      "
    >
      {children}
    </article>
  );
}
