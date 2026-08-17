import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProgrammesPage() {
  const programmes = [
    {
      id: "child-support",
      title: "Child Support",
      color: "var(--kcf-pink)",
      bgColor: "var(--kcf-pale-pink)",
      meaning: "Love, care and compassion.",
      image: "/images/group-smiling.jpg",
      description: "Supporting vulnerable children and families with essential needs and community-based assistance.",
      activities: ["Basic child support", "Family support", "Essential supplies", "Mentorship", "Psychosocial support"],
    },
    {
      id: "education",
      title: "Education",
      color: "var(--kcf-emerald)",
      bgColor: "var(--kcf-pale-green)",
      meaning: "Knowledge, opportunity and stability.",
      image: "/images/children-smiling.jpg",
      description: "Empowering children through access to quality education, learning materials, and mentorship.",
      activities: ["Scholastic materials", "School support", "Scholarships", "Literacy", "Career guidance"],
    },
    {
      id: "health",
      title: "Health & Wellbeing",
      color: "var(--kcf-green)",
      bgColor: "white",
      meaning: "Life, wellbeing and growth.",
      image: "/images/boy-eating-sugar-cane.jpg",
      description: "Ensuring children have access to nutrition, hygiene education, and essential health outreach.",
      activities: ["Health awareness", "Medical outreach", "Nutrition support", "Hygiene education", "Child wellness"],
    },
    {
      id: "community",
      title: "Community Support",
      color: "var(--kcf-gold)",
      bgColor: "var(--kcf-pale-pink)",
      meaning: "Hope, optimism and positive change.",
      image: "/images/children-praying.jpg",
      description: "Empowering families and communities to create sustainable environments for children to thrive.",
      activities: ["Family support", "Parenting education", "Community empowerment", "Livelihood initiatives", "Local partnerships"],
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Holistic Community Care
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">What We Do</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Our holistic approach addresses the root causes of vulnerability to create lasting, sustainable impact for children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes List */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-16">
          {programmes.map((prog, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={prog.id} 
                id={prog.id}
                className="glass-panel p-8 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(15,41,30,0.08)] border border-white/80"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="relative h-[380px] md:h-[440px] rounded-3xl overflow-hidden glass-card shadow-xl border-4 border-white/60">
                      <Image 
                        src={prog.image} 
                        alt={prog.title} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  </div>

                  <div className={`space-y-6 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="inline-block px-4 py-1.5 rounded-full text-white font-bold text-xs tracking-widest uppercase shadow-sm" style={{ backgroundColor: prog.color }}>
                      {prog.meaning}
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)]">{prog.title}</h2>
                    <p className="text-lg text-[var(--kcf-text-primary)]/90 leading-relaxed">
                      {prog.description}
                    </p>
                    
                    <div className="pt-2">
                      <h3 className="font-heading font-bold text-lg mb-4 text-[var(--kcf-emerald-dark)]">Key Focus Areas:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {prog.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-3 glass-pill px-4 py-2.5 rounded-xl border border-white/80">
                            <svg className="w-5 h-5 shrink-0" style={{ color: prog.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[var(--kcf-text-primary)] font-semibold text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button variant="donate" href="/donate" className="shadow-[0_12px_30px_rgba(225,29,72,0.3)]">
                        Support This Programme ❤️
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

