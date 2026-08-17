"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

interface PartnerFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function PartnerForm({ onSuccess, className = "" }: PartnerFormProps) {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className={`glass-panel p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 border border-white/80 shadow-2xl animate-fadeIn ${className}`}>
        <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-4xl shadow-inner animate-bounce">
          🏛️
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">
            Partnership Proposal Received!
          </h3>
          <p className="text-[var(--kcf-text-muted)] text-base max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-[var(--kcf-emerald-dark)]">{formData.contactName}</strong> from <strong className="text-[var(--kcf-emerald-dark)]">{formData.organizationName}</strong>. We are thrilled at the prospect of collaborating to transform children&apos;s lives. Our partnerships team will review your proposal and reach out for an exploratory discussion.
          </p>
        </div>
        <div className="pt-4 flex justify-center">
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
          Collaborate with Kwagala Children&apos;s Foundation to expand educational, healthcare, and livelihood horizons for vulnerable children.
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
              placeholder="+256 700 000000"
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
