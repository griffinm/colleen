"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
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
      weddingDate: notSureDate ? "Not sure yet" : formData.get("weddingDate"),
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
      <div className="rounded-xl border border-rule bg-parchment px-6 py-12 text-center">
        <h3 className="font-serif text-2xl font-light text-ink">
          Thanks &mdash; I got it.
        </h3>
        <p className="mt-3 text-smoke">
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
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink placeholder:text-smoke/60 focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink placeholder:text-smoke/60 focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      {/* Wedding date */}
      <div>
        <label
          htmlFor="weddingDate"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Wedding date
        </label>
        <input
          type="date"
          id="weddingDate"
          name="weddingDate"
          required={!notSureDate}
          disabled={notSureDate}
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
        <label className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={notSureDate}
            onChange={(e) => setNotSureDate(e.target.checked)}
            className="size-4 rounded border-rule text-oxblood accent-oxblood"
          />
          <span className="text-sm text-smoke">Not sure yet</span>
        </label>
      </div>

      {/* Venue */}
      <div>
        <label
          htmlFor="venue"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Venue{" "}
          <span className="font-normal text-smoke">(optional)</span>
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink placeholder:text-smoke/60 focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none"
          placeholder="Venue name or location"
        />
      </div>

      {/* Party size */}
      <div>
        <label
          htmlFor="partySize"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Number of people needing makeup
        </label>
        <select
          id="partySize"
          name="partySize"
          required
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none"
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
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Anything else I should know?{" "}
          <span className="font-normal text-smoke">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-rule bg-bone px-4 py-3 text-ink placeholder:text-smoke/60 focus:border-oxblood focus:ring-2 focus:ring-oxblood/20 focus:outline-none"
          placeholder="Tell me about your wedding — style, vibe, anything on your mind."
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-oxblood text-bone hover:bg-claret sm:w-auto"
        size="lg"
      >
        Send inquiry &rarr;
      </Button>
    </form>
  );
}
