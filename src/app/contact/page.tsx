"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              We're Here for You
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">Contact Us</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Have a question, want to partner, or looking to volunteer? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 flex-grow">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-8 md:p-10 rounded-[2.5rem] border border-white/80 shadow-xl space-y-8">
                <h2 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--kcf-pale-pink)] rounded-2xl text-[var(--kcf-pink)] border border-rose-200 shadow-sm shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--kcf-emerald-dark)] text-base">Email Us</h3>
                      <p className="text-[var(--kcf-text-muted)] text-sm mt-1">General: info@kwagalachildren.org</p>
                      <p className="text-[var(--kcf-text-muted)] text-sm">Safeguarding: safeguarding@kwagalachildren.org</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--kcf-pale-green)] rounded-2xl text-[var(--kcf-green)] border border-emerald-200 shadow-sm shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--kcf-emerald-dark)] text-base">Call Us</h3>
                      <p className="text-[var(--kcf-text-muted)] text-sm mt-1">+256 (0) XXX XXX XXX</p>
                      <p className="text-xs text-[var(--kcf-text-muted)] mt-0.5">Mon-Fri, 9am - 5pm EAT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-50 rounded-2xl text-[var(--kcf-gold)] border border-amber-200 shadow-sm shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--kcf-emerald-dark)] text-base">Visit Our Office</h3>
                      <p className="text-[var(--kcf-text-muted)] text-sm mt-1 leading-relaxed">
                        Kwagala Children&apos;s Foundation<br />
                        Kampala, Uganda
                      </p>
                    </div>
                  </div>
                </div>

                {/* Specialized Forms Shortcut Banner */}
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--kcf-emerald)]">
                    Specialized Inquiries
                  </p>
                  <p className="text-xs text-[var(--kcf-text-primary)] leading-relaxed">
                    Applying as a volunteer or proposing an institutional partnership? Use our dedicated forms:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href="/get-involved?type=volunteer"
                      className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-[var(--kcf-emerald)] hover:bg-emerald-600 hover:text-white transition-colors text-center"
                    >
                      🤝 Volunteer Form
                    </a>
                    <a
                      href="/get-involved?type=partner"
                      className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-amber-300 text-amber-800 hover:bg-amber-600 hover:text-white transition-colors text-center"
                    >
                      🏛️ Partnership Form
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[2.5rem] border border-white/80 shadow-xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2 text-3xl">
                    ✓
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">Message Sent!</h3>
                  <p className="text-[var(--kcf-text-muted)] max-w-md">Thank you for reaching out. A member of our team will review your message and respond shortly.</p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)} className="mt-4">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)] mb-2">Send a Message</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Full Name *</label>
                      <input type="text" id="name" required className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Email Address *</label>
                      <input type="email" id="email" required className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner" placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Subject *</label>
                    <select id="subject" required className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner">
                      <option value="" disabled selected>Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnerships</option>
                      <option value="donation">Donations</option>
                      <option value="safeguarding">Safeguarding Concern</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Message *</label>
                    <textarea id="message" required rows={5} className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-base font-bold shadow-[0_15px_30px_rgba(20,69,47,0.25)]" disabled={isSubmitting}>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

