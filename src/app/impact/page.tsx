import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

export default function ImpactPage() {
  const metrics = [
    { number: "23+", label: "Children Supported", color: "var(--kcf-pink)", icon: "❤️" },
    { number: "23", label: "Education Beneficiaries", color: "var(--kcf-emerald)", icon: "🎓" },
    { number: "5+", label: "Foster Households", color: "var(--kcf-gold)", icon: "🌍" },
    { number: "100%", label: "Transparency & Care", color: "var(--kcf-green)", icon: "✨" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Measurable Change & Dignity
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">Our Impact</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Every number represents a child's life filled with hope, health, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} variant="glass" className="text-center hover:-translate-y-2">
                <CardContent className="space-y-3 p-8">
                  <div className="text-3xl">{metric.icon}</div>
                  <div 
                    className="font-heading text-4xl md:text-5xl font-extrabold" 
                    style={{ color: metric.color }}
                  >
                    {metric.number}
                  </div>
                  <div className="font-semibold text-base text-[var(--kcf-text-primary)]">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--kcf-gold)] bg-amber-50 px-4 py-1.5 rounded-full">
              Transformative Stories
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)]">Stories of Change</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((story) => (
              <div key={story} className="glass-panel rounded-[2.5rem] overflow-hidden flex flex-col h-full border border-white/80 shadow-xl group">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={story === 1 ? "/images/children-smiling.jpg" : "/images/boy-eating.jpg"} 
                    alt="Impact Story" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-5 left-5 bg-gradient-to-r from-[var(--kcf-green)] to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {story === 1 ? "Education & Care" : "Health & Wellbeing"}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col space-y-4">
                  <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)] group-hover:text-[var(--kcf-pink)] transition-colors">
                    {story === 1 ? "Empowering Bright Young Minds" : "Nourishing Bodies, Inspiring Dreams"}
                  </h3>
                  <p className="text-[var(--kcf-text-muted)] flex-grow leading-relaxed text-base">
                    With the support of our partners, we are providing essential nutrition, scholastic materials, and healthcare to children in Uganda, giving them the foundations they need to succeed.
                  </p>
                  <div className="pt-2">
                    <button className="text-[var(--kcf-pink)] font-bold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform">
                      Read Full Impact Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports / Transparency Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] text-center space-y-8 shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--kcf-emerald-dark)]">Transparency & Accountability</h2>
            <p className="text-lg text-[var(--kcf-text-primary)] max-w-2xl mx-auto">
              We hold ourselves to the highest standards of financial integrity and child safeguarding. Our reports are open and accessible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
               <button className="glass-pill px-6 py-3.5 rounded-2xl font-bold text-sm text-[var(--kcf-emerald-dark)] flex items-center gap-3 border border-white hover:bg-white transition-all shadow-sm">
                  <span>📄</span> Annual Report 2024 (PDF)
               </button>
               <button className="glass-pill px-6 py-3.5 rounded-2xl font-bold text-sm text-[var(--kcf-emerald-dark)] flex items-center gap-3 border border-white hover:bg-white transition-all shadow-sm">
                  <span>📊</span> Impact Summary (PDF)
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

