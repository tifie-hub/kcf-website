"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

interface PartnerFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function PartnerForm({ onSuccess, className = "" }: PartnerFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    orgType: "Corporate / Business CSR",
    contactName: "",
    contactTitle: "",
    email: "",
    phone: "",
    website: "",
    focusAreas: [] as string[],
    timeline: "Immediate (Next 1-3 months)",
    proposalDetails: "",
  });

  const focusOptions = [
    "Program Sponsorship & Grants",
    "In-Kind Scholastic & Learning Supplies",
    "Healthcare & Medical Outreach Support",
    "Nutrition & Meal Supply Programs",
    "Employee Volunteering & CSR",
    "Infrastructure, Water & Shelter",
    "Skill Training & Vocational Workshops",
    "Advocacy & Community Events",
  ];

  const handleFocusToggle = (focus: string) => {
    setFormData((prev) => {
      const exists = prev.focusAreas.includes(focus);
      return {
        ...prev,
        focusAreas: exists
          ? prev.focusAreas.filter((item) => item !== focus)
          : [...prev.focusAreas, focus],
      };
    });
  };

  const constructMailto = () => {
    const subject = encodeURIComponent(
      `[Partnership Proposal] ${formData.organizationName} - ${formData.contactName}`
    );
    const body = encodeURIComponent(
      `Hello Kwagala Children's Foundation Team,

Please find our Institutional / Corporate Partnership Proposal details below:

Organization Name: ${formData.organizationName}
Organization Type: ${formData.orgType}
Contact Person: ${formData.contactName}
Designation / Title: ${formData.contactTitle}
Official Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Website / Social URL: ${formData.website || "N/A"}
Anticipated Timeline: ${formData.timeline}
Selected Focus Areas: ${formData.focusAreas.join(", ") || "General Strategic Collaboration"}

Proposal Overview & Objectives:
${formData.proposalDetails}

---
Sent via Kwagala Children's Foundation Partnership Portal`
    );
    return `mailto:kwagalachildrensfoundation@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = constructMailto();
    if (typeof window !== "undefined") {
      window.location.href = mailtoUrl;
    }
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const handleCopy = () => {
    const text = `Partnership Proposal - Kwagala Children's Foundation\nOrganization: ${formData.organizationName} (${formData.orgType})\nContact: ${formData.contactName} (${formData.contactTitle})\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website || "N/A"}\nTimeline: ${formData.timeline}\nFocus: ${formData.focusAreas.join(", ") || "General"}\n\nOverview:\n${formData.proposalDetails}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (submitted) {
    return (
      <div className={`glass-panel p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 border border-white/80 shadow-2xl animate-fadeIn ${className}`}>
        <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-4xl shadow-inner animate-bounce">
          🏛️
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">
            Partnership Proposal Directed to General Email!
          </h3>
          <p className="text-[var(--kcf-text-muted)] text-base max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-[var(--kcf-emerald-dark)]">{formData.contactName}</strong> from <strong className="text-[var(--kcf-emerald-dark)]">{formData.organizationName}</strong>. Your proposal is being directed to{" "}
            <strong className="text-[var(--kcf-emerald)]">kwagalachildrensfoundation@gmail.com</strong>.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white/80 border border-white max-w-md mx-auto text-left space-y-2 shadow-sm text-xs">
          <p className="font-bold text-[var(--kcf-emerald-dark)]">Proposal Summary:</p>
          <p><span className="text-[var(--kcf-text-muted)]">Recipient:</span> kwagalachildrensfoundation@gmail.com</p>
          <p><span className="text-[var(--kcf-text-muted)]">Organization:</span> {formData.organizationName}</p>
          <p><span className="text-[var(--kcf-text-muted)]">Contact:</span> {formData.contactName} ({formData.email})</p>
        </div>

        <div className="pt-2 flex flex-wrap gap-3 justify-center">
          <a
            href={constructMailto()}
            className="px-5 py-3 rounded-2xl bg-[var(--kcf-gold)] text-amber-950 text-xs font-bold shadow-md hover:bg-amber-400 transition-colors"
          >
            ✉️ Re-open Mail App
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="px-5 py-3 rounded-2xl bg-white border border-gray-200 text-[var(--kcf-emerald-dark)] text-xs font-bold shadow-sm hover:bg-gray-50 transition-colors"
          >
            {copied ? "✓ Copied to Clipboard" : "📋 Copy Proposal Details"}
          </button>
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                organizationName: "",
                orgType: "Corporate / Business CSR",
                contactName: "",
                contactTitle: "",
                email: "",
                phone: "",
                website: "",
                focusAreas: [],
                timeline: "Immediate (Next 1-3 months)",
                proposalDetails: "",
              });
            }}
            className="text-xs"
          >
            Submit Another Proposal
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`glass-panel rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(15,41,30,0.1)] border border-white/80 ${className}`}
    >
      <div className="bg-gradient-to-r from-amber-50/80 to-white/70 p-8 md:p-10 border-b border-white/60 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-2">
          🏛️ Institutional &amp; Corporate Partnership Form
        </div>
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-[var(--kcf-emerald-dark)]">
          Partner for Sustainable Impact
        </h2>
        <p className="text-[var(--kcf-text-primary)]/80 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Collaborate with Kwagala Children&apos;s Foundation to expand educational, healthcare, and livelihood horizons for vulnerable children. Proposals are delivered directly to <strong className="text-[var(--kcf-emerald-dark)] font-semibold">kwagalachildrensfoundation@gmail.com</strong>.
        </p>
      </div>

      <div className="p-8 md:p-12 space-y-6">
        {/* Organization Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Organization / Company Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Global Foundation"
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Organization Type *
            </label>
            <select
              value={formData.orgType}
              onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            >
              <option value="Corporate / Business CSR">Corporate / Business CSR</option>
              <option value="Non-Profit / NGO">Non-Profit / NGO</option>
              <option value="Church / Faith-Based Organization">Church / Faith-Based Organization</option>
              <option value="School / Academic Institution">School / Academic Institution</option>
              <option value="Philanthropic Foundation / Trust">Philanthropic Foundation / Trust</option>
              <option value="Community Initiative / Club">Community Initiative / Club</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Contact Person Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. David Mugisha"
              value={formData.contactName}
              onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Designation / Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. CSR Director / Outreach Lead"
              value={formData.contactTitle}
              onChange={(e) => setFormData({ ...formData, contactTitle: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Official Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="partnerships@company.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Phone / WhatsApp Contact *
            </label>
            <input
              type="tel"
              required
              placeholder="+256 702 050 311"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>
        </div>

        {/* Website (Optional) & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Website / Social URL (Optional)
            </label>
            <input
              type="url"
              placeholder="https://yourorganization.org"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Anticipated Timeline / Frequency
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
            >
              <option value="Immediate (Next 1-3 months)">Immediate (Next 1-3 months)</option>
              <option value="Medium-term (Next 3-6 months)">Medium-term (Next 3-6 months)</option>
              <option value="Annual / Long-term Strategic Alliance">Annual / Long-term Strategic Alliance</option>
              <option value="One-time Event / Campaign">One-time Event / Campaign</option>
            </select>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
            Partnership Scope &amp; Focus Areas (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {focusOptions.map((focus) => {
              const selected = formData.focusAreas.includes(focus);
              return (
                <button
                  key={focus}
                  type="button"
                  onClick={() => handleFocusToggle(focus)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                    selected
                      ? "bg-[var(--kcf-emerald-dark)] text-white border-[var(--kcf-emerald-dark)] shadow-sm"
                      : "bg-white/60 text-[var(--kcf-text-primary)] border-black/10 hover:bg-white"
                  }`}
                >
                  <span className="pr-1">{focus}</span>
                  {selected && <span className="text-[var(--kcf-gold)] font-extrabold">✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Proposal Details */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
            Partnership Overview / Objectives *
          </label>
          <textarea
            rows={4}
            required
            placeholder="Please share details regarding how your organization would like to partner with Kwagala Children's Foundation, anticipated goals, and any specific initiatives you have in mind..."
            value={formData.proposalDetails}
            onChange={(e) => setFormData({ ...formData, proposalDetails: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-gold)] text-sm font-medium"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className="w-full py-4 text-base font-bold shadow-lg">
            SUBMIT PARTNERSHIP PROPOSAL 🏛️
          </Button>
        </div>
      </div>
    </form>
  );
}
