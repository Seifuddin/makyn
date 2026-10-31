
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/gallery/1793082410914.jpg",
    title: "Building Construction",
    category: "Construction",
    description: "Quality construction from foundation to completion.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1790877338234.jpg",
    title: "Modern Architecture",
    category: "Residential",
    description: "Modern architectural design and execution.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1790877345684.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1790877649370.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792942780965.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792942891497.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1790877638037.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792942897763.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },


  {
    src: "/images/gallery/1792943151112.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944510852.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792943026276.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944439922.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944448154.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944515390.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },


  {
    src: "/images/gallery/1792944507845.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944498714.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944496070.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944481975.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944478917.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944520129.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },


  {
    src: "/images/gallery/1792944530385.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944533316.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944544576.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944554949.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944582829.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944579177.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },



   {
    src: "/images/gallery/1792944575920.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944559261.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944556558.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944605505.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944614701.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944621279.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },

  {
    src: "/images/gallery/1792944674211.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944671536.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944654030.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944683008.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944695614.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944697985.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },



   {
    src: "/images/gallery/1793082166496.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944746098.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1792944726282.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1792944717480.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1792944711774.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082208100.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },


  {
    src: "/images/gallery/1793082213778.jpg",
    title: "Construction in Progress",
    category: "Development",
    description: "Carefully managed construction work.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082256044.jpg",
    title: "Interior Finishing",
    category: "Finishing",
    description: "Attention to detail in every finishing stage.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082263417.jpg",
    title: "Structural Development",
    category: "Construction",
    description: "Strong foundations and reliable workmanship.",
    shape: "wide",
  },
  {
    src: "/images/gallery/1793082339315.jpg",
    title: "Completed Project",
    category: "Architecture",
    description: "A finished space built with purpose.",
    shape: "tall",
  },
  {
    src: "/images/gallery/1793082333280.jpg",
    title: "Building Details",
    category: "Craftsmanship",
    description: "Precision and quality in every detail.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082317922.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },

  {
    src: "/images/gallery/1793082314175.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082296470.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },
  {
    src: "/images/gallery/1793082366069.jpg",
    title: "Our Work",
    category: "Development",
    description: "Another milestone in our construction journey.",
    shape: "normal",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="bg-[#f7f5f0] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#bd9143]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#bd9143]">
                Our Gallery
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#172b3a] sm:text-4xl">
              A closer look at
              <span className="ml-2 font-normal italic text-[#bd9143]">
                our work.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#172b3a]/65">
            Explore our construction work, completed spaces and the
            craftsmanship behind every project.
          </p>
        </div>

        {/* Masonry gallery */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View ${item.title}`}
              className="group mb-4 block w-full break-inside-avoid overflow-hidden bg-white text-left"
            >
              <div className="relative overflow-hidden bg-[#172b3a]/10">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={900}
                  height={1100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.035]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101f2b]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Image number */}
                <span className="absolute left-4 top-4 bg-[#172b3a]/80 px-3 py-1.5 text-[9px] font-semibold tracking-widest text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* View icon */}
                <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-[#d5b16b] text-[#172b3a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4 4M11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>

              {/* Caption */}
              <div className="hidden border-b border-x border-[#172b3a]/10 px-4 py-3">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#bd9143]">
                  {item.category}
                </span>

                <h3 className="mt-1 text-sm font-semibold text-[#172b3a]">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom signature */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#bd9143]" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#172b3a]/45">
            MAKYN CONSTRUCTION COMPANY LIMITED
          </span>
          <span className="h-px flex-1 bg-[#172b3a]/10" />
        </div>
      </div>

      {/* Image preview */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101f2b]/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition-colors hover:bg-white hover:text-[#172b3a]"
          >
            &times;
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d5b16b]">
                {selectedImage.category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {selectedImage.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
