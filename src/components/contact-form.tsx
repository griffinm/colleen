"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isWedding, setIsWedding] = useState(true);
  const [notSureDate, setNotSureDate] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — if filled, silently discard
    if (formData.get("website")) {
      setSubmitted(true);
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      isWedding,
      ...(isWedding && {
        weddingDate: notSureDate ? "Not sure yet" : formData.get("weddingDate"),
      }),
      venue: formData.get("venue"),
      partySize: formData.get("partySize"),
      message: formData.get("message"),
    };

    // TODO: replace with server action + email delivery
    console.log("Form submission:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-brand-border bg-brand-bg-alt px-6 py-12 text-center">
        <h3 className="font-serif text-2xl font-light text-brand-text-primary">
          Thanks &mdash; I got it.
        </h3>
        <p className="mt-3 text-brand-text-secondary">
          I&apos;ll be in touch within 48 hours &mdash; usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">
          Do not fill this out
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-brand-text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary placeholder:text-brand-text-secondary/60 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-brand-text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary placeholder:text-brand-text-secondary/60 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      {/* Is this for a wedding? */}
      <div className="flex items-center justify-between rounded-lg border border-brand-border bg-brand-bg-alt px-4 py-3">
        <label
          htmlFor="isWedding"
          className="text-sm font-medium text-brand-text-primary"
        >
          This is for a wedding
        </label>
        <Switch
          id="isWedding"
          checked={isWedding}
          onCheckedChange={setIsWedding}
        />
      </div>

      {/* Wedding date */}
      {isWedding && (
        <div>
          <label
            htmlFor="weddingDate"
            className="mb-1.5 block text-sm font-medium text-brand-text-primary"
          >
            Wedding date
          </label>
          <input
            type="date"
            id="weddingDate"
            name="weddingDate"
            required={!notSureDate}
            disabled={notSureDate}
            className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          />
          <label className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              checked={notSureDate}
              onChange={(e) => setNotSureDate(e.target.checked)}
              className="size-4 rounded border-brand-border text-brand-primary accent-brand-primary"
            />
            <span className="text-sm text-brand-text-secondary">Not sure yet</span>
          </label>
        </div>
      )}

      {/* Venue */}
      <div>
        <label
          htmlFor="venue"
          className="mb-1.5 block text-sm font-medium text-brand-text-primary"
        >
          Venue{" "}
          <span className="font-normal text-brand-text-secondary">(optional)</span>
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary placeholder:text-brand-text-secondary/60 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          placeholder="Venue name or location"
        />
      </div>

      {/* Party size */}
      <div>
        <label
          htmlFor="partySize"
          className="mb-1.5 block text-sm font-medium text-brand-text-primary"
        >
          Number of people needing makeup
        </label>
        <select
          id="partySize"
          name="partySize"
          required
          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select...
          </option>
          <option value="1">Just me (the bride)</option>
          <option value="2-3">2–3 people</option>
          <option value="4-6">4–6 people</option>
          <option value="7-10">7–10 people</option>
          <option value="10+">10+ people</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-brand-text-primary"
        >
          Anything else I should know?{" "}
          <span className="font-normal text-brand-text-secondary">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-3 text-brand-text-primary placeholder:text-brand-text-secondary/60 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
          placeholder="Tell me about your wedding — style, vibe, anything on your mind."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-primary text-brand-bg hover:bg-brand-primary-hover sm:w-auto"
        size="lg"
      >
        Send inquiry &rarr;
      </Button>
    </form>
  );
}
