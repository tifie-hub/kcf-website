import React from "react";
import Button from "@/components/ui/Button";

export default function SafeguardingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Safety & Dignity First
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">Child Safeguarding</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Our unwavering commitment to the safety, dignity, protection, and welfare of every child.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] space-y-6 border border-white/80 shadow-xl">
            <h2 className="font-heading text-3xl font-bold text-[var(--kcf-emerald-dark)]">Our Core Commitment</h2>
            <p className="border-l-4 border-[var(--kcf-pink)] pl-6 italic text-xl text-[var(--kcf-emerald-dark)] font-medium leading-relaxed bg-[var(--kcf-pale-pink)] py-4 pr-4 rounded-r-2xl">
              "KCF is committed to ensuring that children participating in our programmes are treated with dignity and protected from abuse, exploitation, neglect and harm."
            </p>
            <p className="text-[var(--kcf-text-primary)] text-base md:text-lg leading-relaxed">
              At Kwagala Children's Foundation, we believe that every child has the fundamental right to grow up in a safe, nurturing environment. Safeguarding is not just a policy; it is integrated into everything we do, from program design to staff recruitment and community engagement.
            </p>
            <p className="text-[var(--kcf-text-primary)] text-base md:text-lg leading-relaxed font-semibold">
              We maintain a strict zero-tolerance approach to any form of child abuse, exploitation, or harm.
            </p>
          </div>

          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] border border-white/80 shadow-xl space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--kcf-emerald-dark)]">Code of Conduct</h3>
            <p className="text-[var(--kcf-text-primary)] text-base leading-relaxed">
              All KCF staff, volunteers, partners, and visitors must adhere to our strict Child Safeguarding Code of Conduct. Key principles include:
            </p>
            <ul className="space-y-3">
              {[
                "Always prioritize the best interests and wellbeing of the child.",
                "Maintain appropriate physical boundaries and professional behavior at all times.",
                "Never use humiliating, degrading, or discriminatory language.",
                "Strictly adhere to image and consent guidelines to protect children's identities and dignity.",
                "Promptly report any safeguarding concerns to official channels."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 glass-pill px-5 py-3 rounded-2xl border border-white">
                  <span className="text-[var(--kcf-pink)] font-bold">🛡️</span>
                  <span className="text-[var(--kcf-text-primary)] font-medium text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] border border-white/80 shadow-xl space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--kcf-emerald-dark)]">Reporting a Concern</h3>
            <p className="text-[var(--kcf-text-primary)] text-base leading-relaxed">
              If you have a safeguarding concern regarding a child, a staff member, a volunteer, or any KCF operations, we urge you to report it immediately. Reports are treated with total confidentiality and investigated thoroughly.
            </p>
            
            <div className="glass-panel-dark rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-white/20">
              <div>
                <p className="font-bold text-white/90 text-sm mb-1 uppercase tracking-wider">Confidential Safeguarding Contact:</p>
                <a href="mailto:safeguarding@kwagalachildren.org" className="text-xl md:text-2xl font-heading text-[var(--kcf-gold)] hover:underline font-bold">
                  safeguarding@kwagalachildren.org
                </a>
              </div>
              <Button href="/contact" variant="donate">Contact Us Securely</Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

