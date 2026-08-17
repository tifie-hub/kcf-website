"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import VolunteerForm from "@/components/forms/VolunteerForm";
import PartnerForm from "@/components/forms/PartnerForm";

export default function GetInvolvedPage() {
  const [activeFormTab, setActiveFormTab] = useState<"volunteer" | "partner">("volunteer");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      const type = params.get("type");

      if (hash === "#partner" || type === "partner" || hash === "#partner-form") {
        setActiveFormTab("partner");
      } else if (hash === "#volunteer" || type === "volunteer" || hash === "#volunteer-form") {
        setActiveFormTab("volunteer");
      }
    }
  }, []);

  const scrollToForm = (tab: "volunteer" | "partner") => {
    setActiveFormTab(tab);
    const formElement = document.getElementById("specialized-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Join Our Mission &amp; Expand Hope
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">
              Get Involved
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Whether you give your resources, your time as a volunteer, or your institutional leadership as a partner—you are transforming lives and restoring dignity to vulnerable children.
            </p>
          </div>
        </div>
      </section>

      {/* Pathways to Involvement Cards */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pathway 1: Donate */}
            <Card variant="glass" className="flex flex-col h-full hover:-translate-y-2 group">
              <CardContent className="pt-8 p-8 flex flex-col flex-grow items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-[var(--kcf-pale-pink)] text-[var(--kcf-pink)] flex items-center justify-center border border-rose-200 shadow-sm text-3xl group-hover:scale-110 transition-transform">
                  ❤️
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">
                  Donate &amp; Sponsor
                </h3>
                <p className="text-[var(--kcf-text-muted)] flex-grow leading-relaxed text-base">
                  Your financial gift directly funds education, warm meals, healthcare, and safe shelter. Select custom dollar amounts or support specific project tiers.
                </p>
                <div className="pt-2 w-full">
                  <Button variant="donate" href="/donate" className="w-full shadow-md">
                    Make a Donation ❤️
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pathway 2: Volunteer */}
            <Card id="volunteer" variant="glass" className="flex flex-col h-full hover:-translate-y-2 group">
              <CardContent className="pt-8 p-8 flex flex-col flex-grow items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-[var(--kcf-pale-green)] text-[var(--kcf-green)] flex items-center justify-center border border-emerald-200 shadow-sm text-3xl group-hover:scale-110 transition-transform">
                  🤝
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">
                  Volunteer
                </h3>
                <p className="text-[var(--kcf-text-muted)] flex-grow leading-relaxed text-base">
                  Share your passion, professional skills, and heart. We welcome on-the-ground volunteers in Uganda as well as virtual contributors globally.
                </p>
                <div className="pt-2 w-full">
                  <Button
                    variant="success"
                    className="w-full shadow-md"
                    onClick={() => scrollToForm("volunteer")}
                  >
                    Open Volunteer Form 🤝
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pathway 3: Partner */}
            <Card id="partner" variant="glass" className="flex flex-col h-full hover:-translate-y-2 group">
              <CardContent className="pt-8 p-8 flex flex-col flex-grow items-center text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-amber-50 text-[var(--kcf-gold)] flex items-center justify-center border border-amber-200 shadow-sm text-3xl group-hover:scale-110 transition-transform">
                  🏛️
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">
                  Partner With Us
                </h3>
                <p className="text-[var(--kcf-text-muted)] flex-grow leading-relaxed text-base">
                  We collaborate with businesses, NGOs, schools, churches, and philanthropic foundations to build lasting, community-wide transformation.
                </p>
                <div className="pt-2 w-full">
                  <Button
                    variant="secondary"
                    className="w-full shadow-md"
                    onClick={() => scrollToForm("partner")}
                  >
                    Open Partnership Form 🏛️
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Specialized Forms Section */}
      <section id="specialized-form-section" className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl space-y-8">
          
          {/* Form Switcher Tabs */}
          <div className="glass-panel p-2 rounded-full flex gap-2 max-w-xl mx-auto shadow-lg border border-white/80">
            <button
              onClick={() => setActiveFormTab("volunteer")}
              className={`flex-1 py-3 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                activeFormTab === "volunteer"
                  ? "bg-gradient-to-r from-[var(--kcf-green)] to-[#059669] text-white shadow-md"
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)] hover:bg-white/50"
              }`}
            >
              <span>🤝</span>
              <span>Volunteer Application</span>
            </button>
            <button
              onClick={() => setActiveFormTab("partner")}
              className={`flex-1 py-3 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                activeFormTab === "partner"
                  ? "bg-gradient-to-r from-[var(--kcf-emerald)] to-[#1E6B47] text-white shadow-md"
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)] hover:bg-white/50"
              }`}
            >
              <span>🏛️</span>
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Form Display */}
          <div className="transition-all duration-500">
            {activeFormTab === "volunteer" ? (
              <VolunteerForm />
            ) : (
              <PartnerForm />
            )}
          </div>

        </div>
      </section>

      {/* Community Fundraiser Callout */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] text-center space-y-6 shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 text-[var(--kcf-pink)] flex items-center justify-center text-3xl shadow-inner">
              🎉
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--kcf-emerald-dark)]">
              Start a Community Fundraiser
            </h2>
            <p className="text-base md:text-lg text-[var(--kcf-text-primary)] leading-relaxed max-w-2xl mx-auto">
              Dedicate your birthday, run a marathon, or organize a school/church event. You can easily mobilize your friends and community to support Kwagala Children&apos;s Foundation.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button variant="primary" className="px-8" href="/contact">
                Contact Us for Campaign Materials →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
