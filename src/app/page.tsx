import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function Home() {
  const galleryItems = [
    {
      title: "Joy & Friendship",
      subtitle: "Nurturing lifelong emotional & social support",
      src: "/images/children-smiling.jpg",
      alt: "Two young girls smiling happily together",
      tag: "Child Support",
      tagColor: "var(--kcf-pink)",
      gridClass: "md:col-span-6 lg:col-span-4 h-[380px]",
    },
    {
      title: "Health & Nutrition",
      subtitle: "Providing daily nourishing meals & care",
      src: "/images/boy-eating.jpg",
      alt: "Young boy enjoying a healthy meal",
      tag: "Nutrition",
      tagColor: "var(--kcf-green)",
      gridClass: "md:col-span-6 lg:col-span-4 h-[380px]",
    },
    {
      title: "Faith & Community",
      subtitle: "Building character, compassion & spiritual hope",
      src: "/images/children-praying.jpg",
      alt: "Children praying together before a meal",
      tag: "Faith & Care",
      tagColor: "var(--kcf-gold)",
      gridClass: "md:col-span-6 lg:col-span-4 h-[380px]",
    },
    {
      title: "Opportunity & Growth",
      subtitle: "Inspiring happiness and sustainable hope",
      src: "/images/boy-eating-sugar-cane.jpg",
      alt: "Happy boy holding sugarcane",
      tag: "Wellbeing",
      tagColor: "var(--kcf-emerald-light)",
      gridClass: "md:col-span-6 lg:col-span-5 h-[420px]",
    },
    {
      title: "United For Tomorrow",
      subtitle: "Empowering groups of vulnerable children to thrive together",
      src: "/images/group-smiling.jpg",
      alt: "Group of bright smiling children hugging outdoors",
      tag: "Together",
      tagColor: "var(--kcf-pink)",
      gridClass: "md:col-span-12 lg:col-span-7 h-[420px]",
    },
  ];

  const stats = [
    { number: "23+", label: "Vulnerable Children", icon: "❤️" },
    { number: "23", label: "School Scholarships", icon: "📚" },
    { number: "5+", label: "Foster Families Supported", icon: "🏡" },
    { number: "100%", label: "Impact & Integrity", icon: "✨" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="relative px-4 md:px-8 py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Main Hero Liquid Glass Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden glass-panel p-8 md:p-16 shadow-[0_30px_90px_rgba(15,41,30,0.15)] border border-white/80">
            {/* Background Image with Liquid Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-children.jpg" 
                alt="Children of Kwagala Foundation"
                fill
                className="object-cover object-center opacity-45 md:opacity-55 transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs md:text-sm font-bold text-[var(--kcf-emerald-dark)] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--kcf-pink)] animate-pulse" />
                Kwagala Means "Love" in Luganda
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--kcf-emerald-dark)] leading-[1.1]">
                Love Today.<br />
                <span className="bg-gradient-to-r from-[var(--kcf-gold)] via-amber-500 to-rose-500 bg-clip-text text-transparent">
                  Hope Tomorrow.
                </span><br />
                Future Forever.
              </h1>
              
              <p className="text-lg md:text-2xl text-[var(--kcf-text-primary)]/90 leading-relaxed font-normal max-w-2xl">
                Empowering vulnerable children to learn, grow, thrive, and build brighter futures through holistic support and community care.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="donate" href="/donate" className="text-base px-8 py-4 shadow-[0_15px_35px_rgba(225,29,72,0.35)]">
                  DONATE NOW ❤️
                </Button>
                <Button variant="secondary" href="/impact" className="text-base px-8 py-4">
                  EXPLORE OUR IMPACT →
                </Button>
              </div>

              <div className="pt-6 border-t border-white/60 inline-flex items-center gap-6">
                <div>
                  <p className="text-[var(--kcf-emerald)] font-bold tracking-widest text-xs uppercase">
                    FAITH • HOPE • LOVE
                  </p>
                  <p className="text-[var(--kcf-text-muted)] text-xs mt-0.5 font-serif italic">1 Corinthians 13:13</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl text-center space-y-1">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-[var(--kcf-emerald-dark)]">{stat.number}</div>
                <div className="text-xs md:text-sm font-medium text-[var(--kcf-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Introduction */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-8 md:p-14 rounded-[2.5rem] text-center space-y-6 shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-pink)] bg-[var(--kcf-pale-pink)] px-4 py-1.5 rounded-full inline-block">
              Our Vision & Heart
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)] leading-tight">
              Welcome to Kwagala Children's Foundation
            </h2>
            <p className="text-lg md:text-xl text-[var(--kcf-text-primary)]/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Kwagala Children's Foundation is a non-profit organization dedicated to supporting, nurturing, and empowering vulnerable children through child support, education, health, and community-based initiatives. "Kwagala" means "love" in Luganda, and reflects our commitment to compassion, dignity, care, hope, and opportunity for every child.
            </p>
            <div className="pt-2">
              <Button variant="secondary" href="/about" className="text-sm px-6 py-2.5">
                READ OUR FOUNDER&apos;S STORY →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Glass Cards Section with Alternating Images */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-10">
          
          {/* Mission Card: Image on LEFT, Text on RIGHT */}
          <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,41,30,0.08)] border border-white/80 group hover:-translate-y-1 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Image on LEFT */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden glass-card shadow-xl border-4 border-white/60">
                <Image 
                  src="/images/mission-shelter.jpg" 
                  alt="Mission - Empowering children with shelter and education" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[var(--kcf-pink)] shadow-md backdrop-blur-md border border-white/30">
                    Targeted Impact
                  </span>
                </div>
              </div>

              {/* Content on RIGHT */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 py-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--kcf-pale-pink)] text-[var(--kcf-pink)] flex items-center justify-center text-xl font-bold border border-rose-200 shadow-sm">
                      🎯
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-pink)] bg-[var(--kcf-pale-pink)] px-3.5 py-1 rounded-full">
                      Our Core Purpose
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-[var(--kcf-emerald-dark)]">
                    Mission Statement
                  </h3>

                  <p className="text-[var(--kcf-text-primary)]/90 text-base md:text-lg leading-relaxed font-normal">
                    To restore hope, dignity, and opportunity to orphaned and vulnerable children by providing secure shelter, essential care, quality education, and unconditional love empowering them to heal, grow, and thrive.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/60 flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--kcf-emerald)] bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                    ✨ Restoring Hope, Dignity & Opportunity
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Vision Card: Text on LEFT, Image on RIGHT */}
          <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,41,30,0.08)] border border-white/80 group hover:-translate-y-1 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Content on LEFT */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 py-2 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[var(--kcf-gold)] flex items-center justify-center text-xl font-bold border border-amber-200 shadow-sm">
                      🌟
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-gold)] bg-amber-50 px-3.5 py-1 rounded-full">
                      Our Future Horizon
                    </span>
                  </div>

                  <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-[var(--kcf-emerald-dark)]">
                    Vision Statement
                  </h3>

                  <p className="text-[var(--kcf-text-primary)]/90 text-base md:text-lg leading-relaxed font-normal">
                    A world where no child walks alone where every vulnerable child is nurtured by love, supported by community, and empowered to reach their full potential.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/60 flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--kcf-gold)] bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
                    🌍 A World Where No Child Walks Alone
                  </span>
                </div>
              </div>

              {/* Image on RIGHT */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[380px] rounded-[2rem] overflow-hidden glass-card shadow-xl border-4 border-white/60 order-1 lg:order-2">
                <Image 
                  src="/images/vision-hope.jpg" 
                  alt="Vision - Children laughing in a supported community" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[var(--kcf-gold)] shadow-md backdrop-blur-md border border-white/30">
                    Future Hope
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Interactive Liquid Glass Gallery */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--kcf-gold)] bg-amber-50 px-4 py-1.5 rounded-full">
              Real Lives. Real Hope.
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)]">
              Our Children. Our Future.
            </h2>
            <p className="text-[var(--kcf-text-muted)] text-base md:text-lg">
              Witness the power of love, nutrition, education, and community transforming lives every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl overflow-hidden glass-card group cursor-pointer ${item.gridClass}`}
              >
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
                />
                
                {/* Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/90 via-[#071610]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Category Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span 
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md border border-white/30"
                    style={{ backgroundColor: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Glass Content Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-10 space-y-2">
                  <h3 className="text-white font-heading font-bold text-2xl group-hover:text-[var(--kcf-gold)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faith Hope Love Glass Quote Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel-dark p-10 md:p-16 rounded-[2.5rem] space-y-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl">
              ❤️
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-widest text-[var(--kcf-gold)] uppercase">
              FAITH • HOPE • LOVE
            </h2>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed max-w-2xl mx-auto">
              "And now these three remain: faith, hope and love. But the greatest of these is love."
            </blockquote>
            <p className="text-[var(--kcf-gold)] font-bold text-base tracking-wider uppercase">1 Corinthians 13:13</p>
          </div>
        </div>
      </section>
    </div>
  );
}

