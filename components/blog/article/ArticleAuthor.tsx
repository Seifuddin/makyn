
type ArticleAuthorProps = {
  name?: string;
  role?: string;
  description?: string;
};

export default function ArticleAuthor({
  name = "Makyn Construction",
  role = "Construction & Building Professionals",
  description = "Sharing practical construction knowledge, industry insights and ideas to help clients make informed building decisions.",
}: ArticleAuthorProps) {
  return (
    <section className="border-y border-[#172b3a]/10 py-7">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Author Initials */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#bd9143]/40 bg-[#172b3a]">
          <span className="text-xl font-bold tracking-wider text-[#d5b16b]">
            MK
          </span>
        </div>

        {/* Author Information */}
        <div className="flex-1">

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#bd9143]">
            About the Author
          </span>

          <h3 className="mt-1 text-lg font-bold text-[#172b3a]">
            {name}
          </h3>

          <p className="mt-1 text-xs font-medium text-[#172b3a]/50">
            {role}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#172b3a]/65">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}
