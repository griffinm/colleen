"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/content/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;
  const active = activeIndex !== null ? images[activeIndex] : null;

  const showAt = useCallback((index: number) => {
    setActiveIndex(((index % images.length) + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  // Keyboard navigation while the lightbox is open. Base-UI handles ESC.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {images.map((image, index) => (
          <li key={image.src}>
            <Reveal delay={(index % 4) * 60}>
              <button
                type="button"
                onClick={() => showAt(index)}
                aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
                className={cn(
                  "group relative block aspect-[4/5] w-full overflow-hidden rounded-md bg-brand-bg-alt",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  priority={index < 4}
                />
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={open}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) setActiveIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-brand-text-primary/85 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200" />
          <Dialog.Popup
            className={cn(
              "fixed inset-0 z-[70] flex flex-col outline-none",
              "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200",
            )}
          >
            <Dialog.Title className="sr-only">
              {active ? `Image ${(activeIndex ?? 0) + 1} of ${images.length}` : "Gallery image"}
            </Dialog.Title>

            <div className="flex items-center justify-between px-4 py-3 text-brand-bg sm:px-6">
              <span className="text-xs font-medium uppercase tracking-[0.22em]">
                {active ? `${(activeIndex ?? 0) + 1} / ${images.length}` : ""}
              </span>
              <Dialog.Close
                aria-label="Close gallery"
                className="rounded-full p-2 text-brand-bg transition-colors hover:bg-brand-bg/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bg focus-visible:ring-offset-2 focus-visible:ring-offset-brand-text-primary"
              >
                <X className="size-6" />
              </Dialog.Close>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-2 pb-6 sm:px-12">
              {active && (
                <div className="relative h-full w-full">
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              )}

              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-brand-bg transition-colors hover:bg-brand-bg/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bg focus-visible:ring-offset-2 focus-visible:ring-offset-brand-text-primary sm:left-4"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-brand-bg transition-colors hover:bg-brand-bg/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bg focus-visible:ring-offset-2 focus-visible:ring-offset-brand-text-primary sm:right-4"
              >
                <ChevronRight className="size-7" />
              </button>
            </div>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
