"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface StoryItem {
  id: string;
  category: "story" | "project" | "news";
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  excerpt: string;
  fullStory: string;
  date: string;
  image: string;
  beneficiary?: string;
  keyMetric?: string;
  quote?: string;
}

interface ProjectItem {
  id: string;
  tier: string;
  amount: number;
  title: string;
  category: string;
  contributes: string;
  outcome: string;
  description: string;
  image: string;
  icon: string;
  badgeColor: string;
  highlight?: boolean;
}

export default function StoriesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const sampleStories: StoryItem[] = [
    {
      id: "brian-education",
      category: "story",
      tag: "Education Focus",
      tagColor: "var(--kcf-green)",
      title: "From the Brink to the Classroom",
      subtitle: "How 8-year-old Brian reclaimed his education and dreams",
      excerpt:
        "When 8-year-old Brian lost his primary caregiver, his school attendance ground to a complete halt. Today, with full scholastic support and mentorship, Brian ranks among the top students in his class.",
      fullStory:
        "When 8-year-old Brian lost his primary caregiver, his school attendance ground to a complete halt. Without tuition fees or basic supplies like exercise books and uniforms, he spent his days helping in local markets just to secure a daily meal. Through the intervention of Kwagala Children's Foundation, Brian was provided with full scholastic support, daily meals, and an assigned mentor. Today, Brian ranks among the top students in his class and dreams of becoming a civil engineer.",
      date: "August 14, 2026",
      image: "/images/brian-classroom.png",
      beneficiary: "Brian, 8 years old",
      keyMetric: "Top 5% in Class Ranking",
      quote: "I used to think I would never go back to school. Now I study hard because I want to build roads and bridges for my community.",
    },
    {
      id: "sarah-health",
      category: "story",
      tag: "Healthcare Focus",
      tagColor: "var(--kcf-pink)",
      title: "Restoring Health & Peace of Mind",
      subtitle: "Immediate medical outreach and nutrition for 5-year-old Sarah",
      excerpt:
        "Growing up in an under-resourced community, Sarah suffered from severe recurring illnesses. Through Kwagala's health outreach, she received prompt medical care and nutrition, restoring her smile.",
      fullStory:
        "Growing up in an under-resourced community, 5-year-old Sarah suffered from severe, recurring treatable illnesses that went unaddressed due to lack of medical access and funds. When Kwagala’s community health outreach identified her situation, she received immediate medical evaluation, treatment, and ongoing nutritional assistance. Now healthy and active, Sarah spends her afternoons playing safely and learning alongside her peers.",
      date: "July 28, 2026",
      image: "/images/sarah-health.png",
      beneficiary: "Sarah, 5 years old",
      keyMetric: "100% Health Recovery",
      quote: "Sarah now has the energy to run, laugh, and play. Her smile brings joy to our entire neighborhood.",
    },
    {
      id: "community-mentorship",
      category: "story",
      tag: "Community Care",
      tagColor: "var(--kcf-gold)",
      title: "United in Hope: Keeping Sibling Bonds Strong",
      subtitle: "Holistic foster support and communal stability in Uganda",
      excerpt:
        "When families face sudden tragedy, siblings are often separated. Kwagala works directly with foster guardians to keep children united in nurturing, faith-filled community households.",
      fullStory:
        "Keeping vulnerable families together is at the core of our community outreach. When orphaned siblings faced the risk of separation across distant relatives, our team stepped in with emergency household support, education stipends, and continuous mentorship. Today, the children live under one roof, guided by foster parents with dignity, love, and unwavering local community care.",
      date: "June 19, 2026",
      image: "/images/group-smiling.jpg",
      beneficiary: "Kampala Community Circle",
      keyMetric: "12 Siblings Reunited",
      quote: "Love is the strongest foundation. When we stand together as a community, no child is left behind.",
    },
    {
      id: "nutrition-power",
      category: "story",
      tag: "Nutrition Initiative",
      tagColor: "var(--kcf-emerald)",
      title: "The Power of a Morning Meal",
      subtitle: "Why daily school nutrition drives cognitive breakthroughs",
      excerpt:
        "Hunger is the silent barrier to learning. Discover how our daily morning porridge and nutritious lunches keep our 23 supported children focused, energized, and thriving.",
      fullStory:
        "For many vulnerable children, a cup of nutrient-rich porridge at school is their primary meal of the day. Kwagala's Nutrition Program provides over 45 daily meals across our partner learning centers, resulting in a 92% increase in classroom attendance and remarkable improvements in student concentration and academic performance.",
      date: "May 22, 2026",
      image: "/images/boy-eating.jpg",
      beneficiary: "Daily Nutrition Beneficiaries",
      keyMetric: "45+ Meals Served Daily",
      quote: "A nourished body fuels an eager mind. You cannot teach a hungry child.",
    },
  ];

  const proposedProjects: ProjectItem[] = [
    {
      id: "project-1",
      tier: "$1 Tier",
      amount: 1,
      title: "Daily Nutrition Program",
      category: "Nutrition & Health",
      contributes: "1 Balanced School Meal",
      outcome: "Provides a nutritious, warm meal (maize porridge, beans, and rice) ensuring a child stays focused throughout the school day.",
      description:
        "Directly combats hunger in the classroom by ensuring every child receives hot, wholesome meals rich in essential micronutrients.",
      image: "/images/boy-eating.jpg",
      icon: "🍲",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      id: "project-5",
      tier: "$5 Tier",
      amount: 5,
      title: "Basic Scholastic Kit",
      category: "Education",
      contributes: "1 Term of Essential Supplies",
      outcome: "Covers exercise books, pens, pencils, and basic stationery for one student.",
      description:
        "Equips eager young learners with the essential writing and reading tools they need to actively participate in class all term long.",
      image: "/images/hero-children.jpg",
      icon: "📚",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      id: "project-15",
      tier: "$15 Tier",
      amount: 15,
      title: "Child Health & Hygiene",
      category: "Healthcare",
      contributes: "1 Month of Healthcare Support",
      outcome: "Funds basic medical check-ups, preventative care, and hygiene kits (soap, towels, dental care).",
      description:
        "Provides routine medical evaluations, immunizations, and clean hygiene supplies to prevent treatable illnesses before they become severe.",
      image: "/images/children-smiling.jpg",
      icon: "🩺",
      badgeColor: "bg-rose-50 text-rose-800 border-rose-200",
    },
    {
      id: "project-30",
      tier: "$30 Tier",
      amount: 30,
      title: "Monthly Child Sponsorship",
      category: "Holistic Care",
      contributes: "Full Comprehensive Care",
      outcome: "Covers school fees, learning materials, two daily meals, and mentorship for one child for a full month.",
      description:
        "Our flagship sponsorship tier delivering total transformation: education, daily food, healthcare, and 1-on-1 life mentorship.",
      image: "/images/vision-hope.jpg",
      icon: "🌟",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      highlight: true,
    },
    {
      id: "project-100",
      tier: "$100 Tier",
      amount: 100,
      title: "Emergency Family Relief",
      category: "Household Relief",
      contributes: "Household Stability Pack",
      outcome: "Provides emergency food rations, bedding, and clean water access for a family fostering a vulnerable child.",
      description:
        "Empowers foster families in crisis with food staples, dry bedding, clean water filtration, and urgent stability resources.",
      image: "/images/mission-shelter.jpg",
      icon: "🏡",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
    },
  ];

  const filteredStories = sampleStories.filter((story) => {
    if (activeTab === "all") return true;
    if (activeTab === "stories") return true;
    if (activeTab === "education" && story.tag.includes("Education")) return true;
    if (activeTab === "health" && (story.tag.includes("Health") || story.tag.includes("Nutrition"))) return true;
    return false;
  });

  const showProjects = activeTab === "all" || activeTab === "projects" || activeTab === "education" || activeTab === "health";

  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
              Real Lives Transformed • Direct Dollar Impact
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white">
              Stories &amp; Proposed Projects
            </h1>
            <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
              Witness the power of love and opportunity in action. Explore our heartfelt beneficiary journeys and see exactly how every dollar generates measurable, life-changing results.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Filter Bar */}
      <section className="sticky top-20 z-40 px-4 md:px-8 py-4">
        <div className="container mx-auto max-w-7xl">
          <div className="glass-panel rounded-full p-2 flex overflow-x-auto gap-2 text-xs md:text-sm font-bold shadow-lg border border-white/80">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-md"
                  : "text-[var(--kcf-text-primary)] hover:bg-white/70"
              }`}
            >
              🌟 All Updates &amp; Projects
            </button>
            <button
              onClick={() => setActiveTab("stories")}
              className={`px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === "stories"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-md"
                  : "text-[var(--kcf-text-primary)] hover:bg-white/70"
              }`}
            >
              📖 Impact Stories
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === "projects"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-md"
                  : "text-[var(--kcf-text-primary)] hover:bg-white/70"
              }`}
            >
              📊 Proposed Projects ($ Breakdown)
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === "education"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-md"
                  : "text-[var(--kcf-text-primary)] hover:bg-white/70"
              }`}
            >
              🎓 Education
            </button>
            <button
              onClick={() => setActiveTab("health")}
              className={`px-6 py-2.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === "health"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-md"
                  : "text-[var(--kcf-text-primary)] hover:bg-white/70"
              }`}
            >
              🩺 Healthcare &amp; Nutrition
            </button>
          </div>
        </div>
      </section>

      {/* Featured Stories Grid */}
      {(activeTab === "all" || activeTab === "stories" || activeTab === "education" || activeTab === "health") && (
        <section className="py-12 md:py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-pink)] bg-[var(--kcf-pale-pink)] px-4 py-1.5 rounded-full inline-block">
                  Voices of Hope
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--kcf-emerald-dark)]">
                  Beneficiary Stories of Transformation
                </h2>
              </div>
              <p className="text-[var(--kcf-text-muted)] text-sm md:text-base max-w-md">
                True journeys of resilient children who found hope, security, and a future through Kwagala Children&apos;s Foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredStories.map((story) => (
                <Card
                  key={story.id}
                  variant="glass"
                  className="flex flex-col h-full hover:-translate-y-2 group overflow-hidden border border-white/80"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-emerald-950/10">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-5 left-5 z-10">
                      <span
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md border border-white/30"
                        style={{ backgroundColor: story.tagColor }}
                      >
                        {story.tag}
                      </span>
                    </div>

                    {story.keyMetric && (
                      <div className="absolute bottom-4 left-5 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-[var(--kcf-emerald-dark)] shadow-sm border border-white">
                        ✨ {story.keyMetric}
                      </div>
                    )}
                  </div>

                  <CardContent className="flex-grow flex flex-col pt-6 p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[var(--kcf-text-muted)] font-semibold">
                      <span>{story.date}</span>
                      {story.beneficiary && (
                        <span className="text-[var(--kcf-emerald)] font-bold">{story.beneficiary}</span>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)] group-hover:text-[var(--kcf-pink)] transition-colors leading-snug">
                      {story.title}
                    </h3>

                    <p className="text-[var(--kcf-text-primary)] text-base flex-grow leading-relaxed">
                      {story.excerpt}
                    </p>

                    {story.quote && (
                      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100 text-xs italic text-[var(--kcf-emerald-dark)]">
                        &ldquo;{story.quote}&rdquo;
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0 p-8 flex items-center justify-between border-t border-white/60">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="text-[var(--kcf-emerald-dark)] font-bold text-sm flex items-center gap-2 hover:text-[var(--kcf-pink)] transition-colors"
                    >
                      Read Full Story &rarr;
                    </button>
                    <Link
                      href="/donate"
                      className="text-xs font-bold px-4 py-2 rounded-full bg-[var(--kcf-pale-pink)] text-[var(--kcf-pink)] hover:bg-[var(--kcf-pink)] hover:text-white transition-all"
                    >
                      Support This Cause ❤️
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proposed Projects & Dollar-Impact Breakdown Section */}
      {showProjects && (
        <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
          <div className="container mx-auto max-w-7xl space-y-12">
            
            {/* Header Banner */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] text-center space-y-4 max-w-4xl mx-auto shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--kcf-emerald)] bg-emerald-50 px-4 py-1.5 rounded-full inline-block">
                Project Allotments &amp; Transparent Impact
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--kcf-emerald-dark)]">
                Proposed Projects &amp; Dollar Breakdown
              </h2>
              <p className="text-base md:text-lg text-[var(--kcf-text-primary)]/90 leading-relaxed max-w-2xl mx-auto">
                Clear, transparent unit-cost breakdowns build immediate donor trust by illustrating exactly how every dollar generates measurable, real-world impact for a child in need.
              </p>
            </div>

            {/* Projects Grid with Tier Allotments */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proposedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`glass-panel rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-[0_20px_40px_rgba(15,41,30,0.08)] border transition-all duration-300 hover:-translate-y-2 group ${
                    proj.highlight
                      ? "ring-2 ring-[var(--kcf-gold)] border-amber-300 shadow-xl"
                      : "border-white/80"
                  }`}
                >
                  <div>
                    {/* Project Header Image */}
                    <div className="relative h-52 w-full overflow-hidden bg-black/10">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071610]/85 via-transparent to-transparent" />
                      
                      {/* Tier Pill */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold text-white bg-[var(--kcf-emerald)] shadow-md border border-white/20">
                          {proj.tier}
                        </span>
                        {proj.highlight && (
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold text-black bg-[var(--kcf-gold)] shadow-md">
                            ⭐ Most Popular
                          </span>
                        )}
                      </div>

                      {/* Dollar Amount Floating Tag */}
                      <div className="absolute bottom-3 right-4 z-10 text-right">
                        <span className="font-heading font-extrabold text-3xl text-white drop-shadow-md">
                          ${proj.amount}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl p-2.5 rounded-xl bg-white/80 border border-white shadow-sm">
                          {proj.icon}
                        </span>
                        <div>
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${proj.badgeColor}`}>
                            {proj.category}
                          </span>
                          <h3 className="font-heading text-xl font-bold text-[var(--kcf-emerald-dark)] mt-1">
                            {proj.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1">
                        <div className="text-xs font-extrabold text-[var(--kcf-emerald)] uppercase tracking-wider">
                          What ${proj.amount} Contributes:
                        </div>
                        <div className="font-heading font-bold text-[var(--kcf-emerald-dark)] text-sm">
                          {proj.contributes}
                        </div>
                      </div>

                      <p className="text-[var(--kcf-text-muted)] text-sm leading-relaxed">
                        {proj.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Donate Tier CTA */}
                  <div className="p-7 pt-0">
                    <Button
                      variant={proj.highlight ? "donate" : "primary"}
                      href={`/donate?amount=${proj.amount}`}
                      className="w-full text-sm py-3 shadow-md"
                    >
                      Fund This Tier (${proj.amount}) ❤️
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Transparent Unit-Cost Matrix Summary Table */}
            <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-[0_20px_50px_rgba(15,41,30,0.06)] border border-white/80 overflow-x-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[var(--kcf-pale-pink)] text-[var(--kcf-pink)] flex items-center justify-center text-xl font-bold">
                  📋
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-[var(--kcf-emerald-dark)]">
                    Direct Operational Outcome Matrix
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--kcf-text-muted)]">
                    100% transparent cost allocation per sponsored unit.
                  </p>
                </div>
              </div>

              <div className="min-w-[600px]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-black/10 text-xs font-bold uppercase tracking-wider text-[var(--kcf-emerald-dark)]">
                      <th className="pb-3 px-4">Tier</th>
                      <th className="pb-3 px-4">Project / Focus Area</th>
                      <th className="pb-3 px-4">Contribution</th>
                      <th className="pb-3 px-4">Direct Outcome</th>
                      <th className="pb-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {proposedProjects.map((row) => (
                      <tr key={row.id} className="hover:bg-white/40 transition-colors">
                        <td className="py-4 px-4 font-heading font-extrabold text-[var(--kcf-emerald-dark)] text-base">
                          ${row.amount}
                        </td>
                        <td className="py-4 px-4 font-bold text-[var(--kcf-text-primary)]">
                          {row.title}
                        </td>
                        <td className="py-4 px-4 text-[var(--kcf-emerald)] font-semibold">
                          {row.contributes}
                        </td>
                        <td className="py-4 px-4 text-[var(--kcf-text-muted)] max-w-xs text-xs md:text-sm">
                          {row.outcome}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Link
                            href={`/donate?amount=${row.amount}`}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[var(--kcf-emerald)] text-white hover:bg-[var(--kcf-pink)] transition-colors shadow-sm"
                          >
                            Give ${row.amount}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Modal for In-Depth Story Reading */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="glass-panel max-w-2xl w-full rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/90 relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 border border-white flex items-center justify-center text-lg font-bold text-[var(--kcf-emerald-dark)] hover:bg-white shadow-sm transition-all"
            >
              ✕
            </button>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-inner">
              <Image
                src={selectedStory.image}
                alt={selectedStory.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md"
                  style={{ backgroundColor: selectedStory.tagColor }}
                >
                  {selectedStory.tag}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-[var(--kcf-text-muted)] font-semibold flex items-center justify-between">
                <span>{selectedStory.date}</span>
                {selectedStory.beneficiary && <span>{selectedStory.beneficiary}</span>}
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[var(--kcf-emerald-dark)]">
                {selectedStory.title}
              </h2>
              <p className="text-sm font-semibold text-[var(--kcf-gold)]">
                {selectedStory.subtitle}
              </p>
            </div>

            <div className="text-[var(--kcf-text-primary)] leading-relaxed text-base space-y-4">
              <p>{selectedStory.fullStory}</p>
            </div>

            {selectedStory.quote && (
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <p className="font-serif italic text-sm text-[var(--kcf-emerald-dark)]">
                  &ldquo;{selectedStory.quote}&rdquo;
                </p>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between gap-4 border-t border-black/10">
              <Button variant="secondary" onClick={() => setSelectedStory(null)} className="text-xs px-5 py-2.5">
                Close
              </Button>
              <Button variant="donate" href="/donate" className="text-xs px-6 py-2.5">
                Sponsor a Child Like This ❤️
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-panel-dark rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] relative overflow-hidden border border-white/20">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white">
              Help Write the Next Success Story
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you provide a $1 meal, a $5 scholastic kit, or a $30 monthly sponsorship, your generosity directly shapes a child&apos;s tomorrow.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button variant="donate" href="/donate" className="shadow-[0_15px_35px_rgba(225,29,72,0.4)]">
                DONATE TO A PROJECT NOW ❤️
              </Button>
              <Button variant="secondary" href="/get-involved?type=volunteer">
                BECOME A VOLUNTEER →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
