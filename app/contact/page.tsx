"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Wire up to your preferred form backend (Resend, Formspree, etc.)
    setSubmitted(true);
  };

  return (
    <main className="contact-main">
      <div className="contact-grid">

        {/* Left — Info */}
        <div className="contact-info">
          <p className="label contact-eyebrow fade-in fade-in-1">
            Get in touch
          </p>

          <h1 className="contact-heading fade-in fade-in-2">
            Come find
            <br />
            <em className="contact-heading-em">your ground.</em>
          </h1>

          <div className="contact-divider fade-in fade-in-3" />

          <p className="contact-description fade-in fade-in-3">
            Questions about the gatherings, the practices, or just want to
            connect? We&apos;d love to hear from you.
          </p>

          <div className="contact-info-meta fade-in fade-in-4">
            <div>
              <p className="label contact-meta-label">Email</p>
              <a
                href="mailto:hello@embodiment-playground.com"
                className="contact-email-link"
              >
                hello@embodiment-playground.com
              </a>
            </div>

            <div className="contact-info-meta-item">
              <p className="label contact-meta-label">Gatherings</p>
              <p className="contact-description" style={{ marginBottom: 0 }}>
                Monthly · Outdoors · Community
              </p>
            </div>
          </div>

          {/* Decorative orb */}
          <div className="contact-orb fade-in fade-in-5">
            <div className="contact-orb-mid">
              <div className="contact-orb-inner" />
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-form-panel fade-in fade-in-3">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-mark">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="contact-success-heading">Message received.</h2>
              <p className="contact-success-body">
                Thanks for reaching out. We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What&apos;s on your mind?"
                  value={formState.message}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="contact-form-footer">
                <button type="submit" className="contact-submit-btn">
                  Send message
                </button>
                <p className="contact-form-hint">
                  We&apos;ll respond within a few days.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
