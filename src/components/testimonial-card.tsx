import type { Testimonial } from "@/content/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex flex-col gap-4">
      <p className="font-serif text-lg leading-relaxed italic text-brand-text-primary md:text-xl">
        <span className="text-brand-accent" aria-hidden="true">
          &ldquo;
        </span>
        {testimonial.quote}
        <span className="text-brand-accent" aria-hidden="true">
          &rdquo;
        </span>
      </p>
      <cite className="not-italic">
        <span className="text-sm font-medium text-brand-primary-hover">
          {testimonial.brideName}
        </span>
        <span className="text-sm text-brand-text-secondary">
          {" "}
          &mdash; {testimonial.venue}, {testimonial.date}
        </span>
      </cite>
    </blockquote>
  );
}
