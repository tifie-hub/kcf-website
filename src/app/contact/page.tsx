"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const subjectMap: Record<string, string> = {
    general: "General Inquiry",
    volunteer: "Volunteering Inquiry",
    partnership: "Partnership Proposal",
    donation: "Donation & Sponsorship",
    safeguarding: "Safeguarding Concern",
  };

  const constructMailto = () => {
    const subjectLabel = subjectMap[formData.subject] || "General Inquiry";
    const emailSubject = encodeURIComponent(`[KCF Contact] ${subjectLabel} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Kwagala Children's Foundation Team,

Full Name: ${formData.name}
Email Address: ${formData.email}
Topic: ${subjectLabel}

Message:
${formData.message}

---
Sent via Kwagala Children's Foundation Contact Form`
    );
    return `mailto:kwagalachildrensfoundation@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoUrl = constructMailto();
    
    // Attempt opening mail client
    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopy = () => {
    const text = `Full Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${subjectMap[formData.subject] || "General"}\n\nMessage:\n${formData.message}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              We&apos;re Here for You
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">Contact Us</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Have a question, want to partner, or looking to volunteer? We&apos;d love to hear from you.
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
                  {/* Email Card */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--kcf-pale-pink)] rounded-2xl text-[var(--kcf-pink)] border border-rose-200 shadow-sm shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--kcf-emerald-dark)] text-base">Email Us</h3>
                      <p className="text-xs text-[var(--kcf-text-muted)] mt-1">General &amp; Safeguarding Inquiries:</p>
                      <a
                        href="mailto:kwagalachildrensfoundation@gmail.com"
                        className="text-sm font-bold text-[var(--kcf-emerald)] hover:text-[var(--kcf-emerald-dark)] hover:underline break-all block mt-0.5"
                      >
                        kwagalachildrensfoundation@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone & WhatsApp Card */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--kcf-pale-green)] rounded-2xl text-[var(--kcf-green)] border border-emerald-200 shadow-sm shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--kcf-emerald-dark)] text-base">Call &amp; WhatsApp</h3>
                      <div className="flex flex-col gap-1 mt-1">
                        <a
                          href="tel:+256702050311"
                          className="text-sm font-bold text-[var(--kcf-emerald)] hover:text-[var(--kcf-emerald-dark)] hover:underline"
                        >
                          +256 702 050 311
                        </a>
                        <a
                          href="https://wa.me/256702050311"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                        >
                          <span>💬 Chat on WhatsApp (+256 702 050 311)</span>
                        </a>
                      </div>
                      <p className="text-xs text-[var(--kcf-text-muted)] mt-1">Mon-Fri, 9am - 5pm EAT</p>
                    </div>
                  </div>

                  {/* Office Location */}
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
                <div className="h-full flex flex-col items-center justify-center text-center space-y-5 py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl shadow-inner animate-bounce">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">
                      Message Directed to General Email!
                    </h3>
                    <p className="text-[var(--kcf-text-muted)] text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[var(--kcf-emerald-dark)]">{formData.name}</strong>. Your message is being directed to{" "}
                      <strong className="text-[var(--kcf-emerald)]">kwagalachildrensfoundation@gmail.com</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/80 border border-white max-w-md w-full text-left space-y-2 shadow-sm text-xs">
                    <p className="font-bold text-[var(--kcf-emerald-dark)]">Submission Summary:</p>
                    <p><span className="text-[var(--kcf-text-muted)]">To:</span> kwagalachildrensfoundation@gmail.com</p>
                    <p><span className="text-[var(--kcf-text-muted)]">Subject:</span> [{subjectMap[formData.subject]}] {formData.name}</p>
                    <p className="line-clamp-2"><span className="text-[var(--kcf-text-muted)]">Message:</span> {formData.message}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center pt-2">
                    <a
                      href={constructMailto()}
                      className="px-5 py-3 rounded-2xl bg-[var(--kcf-emerald)] text-white text-xs font-bold shadow-md hover:bg-[var(--kcf-emerald-dark)] transition-colors"
                    >
                      ✉️ Re-open Mail App
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-[var(--kcf-emerald-dark)] text-xs font-bold shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      {copied ? "✓ Copied to Clipboard" : "📋 Copy Details"}
                    </button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "general", message: "" });
                      }}
                      className="text-xs"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">Send a Message</h2>
                    <p className="text-xs text-[var(--kcf-text-muted)] mt-1">
                      All messages are sent directly to our team at <strong className="text-[var(--kcf-emerald)]">kwagalachildrensfoundation@gmail.com</strong>.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner"
                        placeholder="e.g. Jane Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Subject / Topic *</label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnerships</option>
                      <option value="donation">Donations &amp; Sponsorship</option>
                      <option value="safeguarding">Safeguarding Concern</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--kcf-emerald)] text-sm font-semibold transition-all shadow-inner resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-base font-bold shadow-[0_15px_30px_rgba(20,69,47,0.25)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Routing Message..." : "Send Message to General Email ✉️"}
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

