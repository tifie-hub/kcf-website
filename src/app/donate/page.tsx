import React from "react";
import Image from "next/image";
import DonationForm from "@/components/donate/DonationForm";

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full min-h-screen ambient-mesh">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Impact Message & Glass Container */}
          <div className="lg:col-span-6 glass-panel-dark rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.4)] border border-white/20">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/hero-children.jpg" 
                alt="Children of Kwagala Foundation smiling"
                fill
                className="object-cover opacity-20 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071610] via-[#071610]/80 to-transparent" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[var(--kcf-gold)]">
                Make a Lasting Difference
              </span>

              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Give the Gift of a Brighter Future
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed font-normal">
                Every child deserves the opportunity to learn, grow, and thrive. Your donation directly funds education, healthcare, and essential child support programs.
              </p>
              
              <ul className="space-y-4 pt-2">
                <li className="flex items-center gap-3 text-white/90 font-medium text-base">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs">✓</span>
                  <span>100% of your donation is securely processed</span>
                </li>
                <li className="flex items-center gap-3 text-white/90 font-medium text-base">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs">✓</span>
                  <span>Full financial transparency & accountability</span>
                </li>
                <li className="flex items-center gap-3 text-white/90 font-medium text-base">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs">✓</span>
                  <span>Direct impact on children's lives in Uganda</span>
                </li>
              </ul>

              <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 mt-6">
                <p className="text-[var(--kcf-gold)] font-bold text-base mb-1">Our Promise to You</p>
                <p className="text-xs text-white/80 leading-relaxed">
                  We ensure that your contributions are used effectively and responsibly to create sustainable change in the communities we serve.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Donation Form */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full">
              <DonationForm />
              
              <div className="mt-6 text-center text-xs text-[var(--kcf-text-muted)] font-medium">
                <p>🔒 256-Bit SSL Encrypted & Secure Payment.</p>
                <p className="mt-2">
                  Have questions about your contribution?{" "}
                  <a href="/contact" className="text-[var(--kcf-emerald-dark)] font-bold hover:underline">
                    Contact our support team
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

