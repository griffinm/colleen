"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PlaceholderImage } from "@/content/placeholder-images";

interface HeroSlideshowProps {
  images: PlaceholderImage[];
  intervalMs?: number;
}

export function HeroSlideshow({
  images,
  intervalMs = 4000,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((image, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={image.src}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        );
      })}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-brand-primary/20"
      />
    </>
  );
}
