"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

interface VolunteerFormProps {
  onSuccess?: () => void;
  className?: string;
}

export default function VolunteerForm({ onSuccess, className = "" }: VolunteerFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Uganda (Local)",
    skills: [] as string[],
    availability: "Part-time (A few hours / week)",
    experience: "",
    motivation: "",
    agreeSafeguarding: false,
  });

  const skillOptions = [
    "Teaching & Tutoring",
    "Healthcare & Medical Aid",
    "Mentorship & Youth Guidance",
    "Nutrition & Meal Prep",
    "Sports, Arts & Music",
    "Photography & Media",
    "Fundraising & Campaigns",
    "Virtual / Remote Support",
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      return {
        ...prev,
        skills: exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeSafeguarding) {
      alert("Please agree to our Child Safeguarding guidelines to submit your volunteer application.");
      return;
    }
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div className={`glass-panel p-8 md:p-12 rounded-[2.5rem] text-center space-y-6 border border-white/80 shadow-2xl animate-fadeIn ${className}`}>
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl shadow-inner animate-bounce">
          ✓
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">
            Application Received!
          </h3>
          <p className="text-[var(--kcf-text-muted)] text-base max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-[var(--kcf-emerald-dark)]">{formData.fullName}</strong>. Your passion to volunteer with Kwagala Children&apos;s Foundation means the world to our children. Our volunteer coordinator will review your profile and contact you shortly via email/phone.
          </p>
        </div>
        <div className="pt-4 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                location: "Uganda (Local)",
                skills: [],
                availability: "Part-time (A few hours / week)",
                experience: "",
                motivation: "",
                agreeSafeguarding: false,
              });
            }}
          >
            Submit Another Application
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
      <div className="bg-gradient-to-r from-[var(--kcf-pale-green)] to-white/70 p-8 md:p-10 border-b border-white/60 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-2">
          🤝 Volunteer Application Form
        </div>
        <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-[var(--kcf-emerald-dark)]">
          Join the Kwagala Volunteer Family
        </h2>
        <p className="text-[var(--kcf-text-primary)]/80 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Share your time, gifts, and compassion to inspire and nurture vulnerable children in Uganda and beyond.
        </p>
      </div>

      <div className="p-8 md:p-12 space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Grace Nakato"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="grace@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+256 700 000000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
              Your Location *
            </label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
            >
              <option value="Uganda (Local)">Uganda (Local Volunteer)</option>
              <option value="East Africa (Regional)">East Africa (Regional)</option>
              <option value="International (Travel to Uganda)">International (Travel to Uganda)</option>
              <option value="Virtual (Remote Contributor)">Virtual / Remote Worldwide</option>
            </select>
          </div>
        </div>

        {/* Skills & Areas of Interest */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
            Areas of Interest &amp; Skills (Select all that apply)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {skillOptions.map((skill) => {
              const selected = formData.skills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all border text-left flex items-center justify-between ${
                    selected
                      ? "bg-[var(--kcf-emerald)] text-white border-[var(--kcf-emerald)] shadow-sm"
                      : "bg-white/60 text-[var(--kcf-text-primary)] border-black/10 hover:bg-white"
                  }`}
                >
                  <span>{skill}</span>
                  {selected && <span>✓</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
            Availability
          </label>
          <select
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
          >
            <option value="Part-time (A few hours / week)">Part-time (A few hours per week)</option>
            <option value="Weekends Only">Weekends Only</option>
            <option value="Full-time (Short term project)">Full-time (Short term project)</option>
            <option value="Flexible / Virtual as needed">Flexible / Virtual as needed</option>
            <option value="Holiday / Mission Trip">Holiday / Mission Trip</option>
          </select>
        </div>

        {/* Motivation / Experience */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
            Why do you want to volunteer with Kwagala Foundation?
          </label>
          <textarea
            rows={3}
            required
            placeholder="Tell us a little bit about your heart for vulnerable children, relevant experience, or what you hope to contribute..."
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[var(--kcf-green)] text-sm font-medium"
          />
        </div>

        {/* Safeguarding Agreement */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
          <input
            type="checkbox"
            id="agreeSafeguarding"
            required
            checked={formData.agreeSafeguarding}
            onChange={(e) => setFormData({ ...formData, agreeSafeguarding: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-[var(--kcf-green)] focus:ring-[var(--kcf-green)]"
          />
          <label htmlFor="agreeSafeguarding" className="text-xs text-[var(--kcf-emerald-dark)] leading-relaxed font-medium cursor-pointer">
            I understand that Kwagala Children&apos;s Foundation has a zero-tolerance policy for child abuse and exploitation. I agree to uphold and adhere to all Child Safeguarding principles and background checks.
          </label>
        </div>

        <div className="pt-2">
          <Button type="submit" variant="success" className="w-full py-4 text-base font-bold shadow-lg">
            SUBMIT VOLUNTEER APPLICATION 🤝
          </Button>
        </div>
      </div>
    </form>
  );
}
