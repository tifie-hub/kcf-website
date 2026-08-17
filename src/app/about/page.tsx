import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function AboutPage() {
  const coreValues = [
    { title: "Love", description: "Compassion, care and dignity at the center of our work.", icon: "❤️" },
    { title: "Hope", description: "Creating better opportunities and brighter futures.", icon: "🌟" },
    { title: "Faith", description: "Believing every child has dignity, potential and value.", icon: "✝️" },
    { title: "Integrity", description: "Honesty and transparency in all we do.", icon: "🛡️" },
    { title: "Empowerment", description: "Equipping children to thrive independently.", icon: "🌱" },
    { title: "Community", description: "Working together to create sustainable impact.", icon: "🤝" },
  ];

  const pillars = [
    {
      title: "Basic Essentials",
      subtitle: "Nutritious food, clean shelter, healthcare, and safety.",
      description:
        "Ensuring every vulnerable child has access to balanced daily meals, safe and hygienic shelter, essential medical treatment, and a secure environment to grow in peace.",
      icon: "🍲",
      badge: "Foundation of Life",
      color: "var(--kcf-green)",
      bgLight: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      title: "Educational Empowerment",
      subtitle: "The tools, mentorship, and schooling necessary to build independent futures.",
      description:
        "Supplying school tuition, books, uniforms, vocational skills, and dedicated mentorship so children can unlock their intellectual potential and break cycles of generational poverty.",
      icon: "📚",
      badge: "Path to Independence",
      color: "var(--kcf-gold)",
      bgLight: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      title: "Holistic Support & Love",
      subtitle: "An environment where every child feels valued, heard, and cherished.",
      description:
        "Providing emotional encouragement, spiritual nurturing, trauma counseling, and unconditional belonging so each child knows they are deeply loved and never alone.",
      icon: "💖",
      badge: "Heart of Our Mission",
      color: "var(--kcf-pink)",
      bgLight: "bg-rose-50 text-rose-800 border-rose-200",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Discover Our Roots, Mission & Story
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">About Us</h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Supporting, nurturing, and empowering vulnerable children through education, health, child support, and community-based initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Founder's Quote Banner */}
      <section className="px-4 md:px-8 -mt-4 mb-4">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,41,30,0.08)] border border-white/80 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-6xl md:text-7xl font-serif text-[var(--kcf-gold)]/20 select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Founder Image */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-full md:h-72 rounded-3xl overflow-hidden glass-card border-4 border-white shadow-xl group">
                  <Image
                    src="/images/founder.png"
                    alt="Mulajje Latif - Founder, Kwagala Children's Foundation"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold">Mulajje Latif</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-bold text-[var(--kcf-emerald-dark)] bg-white/90 px-3.5 py-1 rounded-full border border-white shadow-sm">
                    Mulajje Latif • Founder
                  </span>
                </div>
              </div>

              {/* Founder Quote Content */}
              <div className="md:col-span-8 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-pink)] bg-[var(--kcf-pale-pink)] px-4 py-1.5 rounded-full">
                    The Founder’s Voice
                  </span>
                  <span className="text-xs font-bold text-[var(--kcf-gold)] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                    ✨ Lived Experience • Purposeful Action
                  </span>
                </div>

                <blockquote className="font-heading text-xl md:text-2xl lg:text-3xl text-[var(--kcf-emerald-dark)] font-semibold leading-relaxed italic">
                  &ldquo;Having been raised by foster families after the loss of my parents, I always knew that children like me deserved more than just survival; they deserved love, basic needs, and unwavering support to thrive as they grow.&rdquo;
                </blockquote>

                <div className="pt-3 flex items-center justify-between flex-wrap gap-4 border-t border-black/5">
                  <div>
                    <p className="font-heading font-bold text-[var(--kcf-emerald-dark)] text-lg">
                      Mulajje Latif
                    </p>
                    <p className="text-[var(--kcf-text-muted)] text-sm font-medium">
                      Founder, Kwagala Children&apos;s Foundation
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--kcf-emerald)] bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    ❤️ Guided by Love
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* A Journey Born from Lived Experience */}
      <section className="py-12 md:py-18 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Story Content */}
            <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-[0_20px_50px_rgba(15,41,30,0.08)] border border-white/80">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-emerald)] bg-emerald-50 px-4 py-1.5 rounded-full inline-block">
                The Founder&apos;s Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--kcf-emerald-dark)]">
                A Journey Born from Lived Experience
              </h2>
              
              <p className="text-[var(--kcf-text-primary)] leading-relaxed text-base md:text-lg">
                Every vision has a beginning, but for <strong className="text-[var(--kcf-emerald-dark)]">Kwagala Children&apos;s Foundation</strong>, that beginning started in the heart of a child who knew what it meant to navigate the world without parents.
              </p>
              
              <p className="text-[var(--kcf-text-primary)] leading-relaxed text-base md:text-lg">
                After losing my parents at an early age, my path was shaped by the grace and generosity of foster families. While I was deeply grateful for shelter and care, growing up in foster environments opened my eyes to the quiet struggles that vulnerable children face every day—the longing for belonging, the uncertainty of basic needs, and the deep desire for a compassionate hand to guide them toward a brighter future.
              </p>

              {/* Conviction Callout Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 to-amber-50/80 border border-emerald-100/80 shadow-inner">
                <p className="font-heading font-bold text-[var(--kcf-emerald-dark)] text-base md:text-lg italic leading-relaxed">
                  &ldquo;I carried a simple yet powerful conviction throughout those formative years: no child should ever feel alone, forgotten, or defined by their circumstances.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative h-[420px] lg:h-[500px] rounded-[2.5rem] overflow-hidden glass-card shadow-2xl border-4 border-white/70">
              <Image 
                src="/images/children-smiling.jpg" 
                alt="Children of Kwagala Children's Foundation smiling with joy" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[var(--kcf-pink)] shadow-md backdrop-blur-md border border-white/30 w-fit mb-2">
                  Transformation Through Love
                </span>
                <p className="text-white font-heading font-bold text-lg md:text-xl leading-snug">
                  Every child deserves love, dignity, and a future without limits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Spark of Kwagala & Three Pillars */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-12">
          
          {/* Header Card */}
          <div className="glass-panel p-8 md:p-14 rounded-[2.5rem] text-center space-y-6 max-w-4xl mx-auto shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-gold)] bg-amber-50 px-4 py-1.5 rounded-full inline-block">
              Turning Reflection into Purposeful Action
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)] leading-tight">
              The Spark of Kwagala
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-[var(--kcf-pink)] font-semibold">
              Kwagala means Love — a force that restores dignity, heals wounds, and unlocks potential.
            </p>
            <p className="text-base md:text-lg text-[var(--kcf-text-primary)]/90 leading-relaxed font-normal">
              Driven by my own journey, I founded Kwagala Children&apos;s Foundation to turn personal reflection into purposeful action. I wanted to build a haven where children without family stability could find more than just temporary relief. I wanted to create a community where every child receives:
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between space-y-6 shadow-[0_20px_40px_rgba(15,41,30,0.08)] border border-white/80 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl p-3 w-14 h-14 rounded-2xl bg-white/90 border border-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <span className={`text-xs font-bold px-3.5 py-1 rounded-full border ${pillar.bgLight}`}>
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-[var(--kcf-gold)] leading-snug">
                    {pillar.subtitle}
                  </p>

                  <p className="text-[var(--kcf-text-muted)] text-sm md:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/60 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--kcf-emerald)]" />
                  <span className="text-xs font-bold text-[var(--kcf-emerald-dark)] uppercase tracking-wider">
                    Core Commitment
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Our Promise to the Next Generation */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-8 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-gold)] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/20">
                  Our Sacred Commitment
                </span>
                
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">
                  Our Promise to the Next Generation
                </h2>

                <p className="text-lg md:text-xl text-white/95 leading-relaxed font-normal">
                  Today, Kwagala Children&apos;s Foundation stands as a bridge of hope between hardship and opportunity. My journey from a child in foster care to a founder is proof that with love and opportunity, a child&apos;s story does not end with tragedy—<span className="text-[var(--kcf-gold)] font-semibold">it begins with transformation</span>.
                </p>

                <p className="text-base md:text-lg text-white/85 leading-relaxed font-normal">
                  Every child deserves a safe place to dream, grow, and lead. Through Kwagala Children&apos;s Foundation, we are committed to ensuring that no child walks that path alone.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="donate" href="/donate" className="shadow-[0_15px_35px_rgba(225,29,72,0.4)]">
                    SUPPORT A CHILD TODAY ❤️
                  </Button>
                  <Button variant="secondary" href="/get-involved">
                    GET INVOLVED →
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-4 relative h-[320px] lg:h-[380px] rounded-[2rem] overflow-hidden glass-card border-2 border-white/30">
                <Image 
                  src="/images/vision-hope.jpg" 
                  alt="A brighter tomorrow for children" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white font-heading font-bold text-base">
                    Building bridges of hope for every child.
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Faith, Hope & Love Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel p-10 md:p-14 rounded-[2.5rem] space-y-6 shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-3xl shadow-inner">
               ❤️
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--kcf-emerald-dark)] tracking-wider">
              FAITH • HOPE • LOVE
            </h2>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-[var(--kcf-text-primary)] leading-relaxed max-w-2xl mx-auto">
              &ldquo;And now these three remain: faith, hope and love. But the greatest of these is love.&rdquo;
            </blockquote>
            <p className="text-[var(--kcf-gold)] font-bold text-base tracking-wider">1 Corinthians 13:13</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--kcf-emerald)] bg-emerald-50 px-4 py-1.5 rounded-full">
              What Guides Us
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)]">
              Our Core Values
            </h2>
            <p className="text-[var(--kcf-text-muted)] text-base">
              The foundational pillars that direct our programs, relationships, and everyday dedication to vulnerable children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} variant="glass" className="hover:-translate-y-2">
                <CardContent className="space-y-4 p-8">
                  <div className="text-3xl p-3 w-14 h-14 rounded-2xl bg-white/80 border border-white flex items-center justify-center shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">{value.title}</h3>
                  <p className="text-[var(--kcf-text-muted)] text-base leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
