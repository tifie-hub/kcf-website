import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/kwagala_childrens_foundation",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverColor: "hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@kwagala.childrens7",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.46 6.27 6.27 0 0 0 1.86-4.48V8.71a8.16 8.16 0 0 0 4.91 1.63v-3.65z" />
        </svg>
      ),
      hoverColor: "hover:bg-black hover:border-teal-400",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@kwagalachildrensfoundation?si=0b5_q6naDRRw1hh2",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      hoverColor: "hover:bg-red-600 hover:border-red-500",
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=256702050311",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      hoverColor: "hover:bg-emerald-600 hover:border-emerald-500",
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/YBjveFtH5",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.94-.13-2.39.03-3.42l1.1-4.66s-.28-.56-.28-1.39c0-1.3.75-2.28 1.7-2.28.8 0 1.19.6 1.19 1.32 0 .8-.51 2.01-.78 3.12-.22.94.47 1.7 1.4 1.7 1.68 0 2.97-1.77 2.97-4.33 0-2.26-1.63-3.85-3.95-3.85-2.7 0-4.28 2.02-4.28 4.11 0 .81.31 1.69.7 2.16.08.1.09.18.06.28l-.26 1.07c-.04.18-.14.22-.32.13-1.2-.56-1.95-2.31-1.95-3.72 0-3.03 2.2-5.81 6.35-5.81 3.33 0 5.92 2.37 5.92 5.55 0 3.31-2.09 5.98-4.99 5.98-.97 0-1.89-.51-2.2-.11l-.6 2.29c-.22.84-.81 1.89-1.21 2.53A12 12 0 1 0 12 0z" />
        </svg>
      ),
      hoverColor: "hover:bg-rose-700 hover:border-rose-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      hoverColor: "hover:bg-blue-600 hover:border-blue-500",
    },
    {
      name: "Linktree",
      href: "https://linktr.ee/kwagala_childrens_foundation",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.936l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2.234V8.121h5.908L3.942 4.116l2.325-2.38 4.005 4.117V0h3.464v5.853zm-3.464 10.306h3.464V24h-3.464v-7.841z" />
        </svg>
      ),
      hoverColor: "hover:bg-emerald-500 hover:border-emerald-400",
    },
  ];

  return (
    <footer className="relative bg-[#071610] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--kcf-emerald)]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--kcf-pink)]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-panel-dark rounded-3xl p-8 md:p-12 mb-12 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand & Mission Column */}
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-block bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="Kwagala Children's Foundation Logo"
                  width={240}
                  height={80}
                  className="object-contain max-h-18 w-auto"
                />
              </Link>
              <p className="text-white/90 font-heading text-lg font-medium leading-snug">
                Love Today. <span className="text-[var(--kcf-gold)]">Hope Tomorrow.</span> Future Forever.
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Supporting, nurturing, and empowering vulnerable children through education, nutrition, healthcare, and community care in Uganda.
              </p>
              <div className="pt-2 text-white/80 text-sm">
                <p className="font-semibold text-[var(--kcf-gold)] tracking-wide uppercase text-xs">Faith • Hope • Love</p>
                <p className="italic text-xs text-white/60">1 Corinthians 13:13</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-heading font-semibold text-base text-[var(--kcf-gold)] uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-white/80 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/programmes" className="hover:text-white transition-colors">What We Do</Link></li>
                <li><Link href="/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                <li><Link href="/stories" className="hover:text-white transition-colors">Stories &amp; Projects</Link></li>
                <li><Link href="/donate" className="hover:text-[var(--kcf-pink)] font-semibold transition-colors">Donate </Link></li>
                <li><Link href="/get-involved?type=volunteer" className="hover:text-white transition-colors">Volunteer Application </Link></li>
                <li><Link href="/get-involved?type=partner" className="hover:text-white transition-colors">Partner With Us </Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect & Social Platforms */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-base mb-2 text-[var(--kcf-gold)] uppercase tracking-wider">
                  Connect With Us
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  Follow our journey and daily updates across our official channels:
                </p>

                {/* Direct Contact Info */}
                <div className="space-y-1.5 mb-4 text-xs text-white/80">
                  <p className="flex items-center gap-2">
                    <span className="text-[var(--kcf-gold)]">✉️</span>
                    <a href="mailto:kwagalachildrensfoundation@gmail.com" className="hover:text-white hover:underline break-all">
                      kwagalachildrensfoundation@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[var(--kcf-gold)]">📞</span>
                    <a href="tel:+256702050311" className="hover:text-white hover:underline">
                      +256 702 050 311
                    </a>
                  </p>
                </div>

                {/* Social Media Icons Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className={`w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-sm ${social.hoverColor}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <h3 className="font-heading font-semibold text-sm mb-2 text-[var(--kcf-gold)] uppercase tracking-wider">
                  Legal &amp; Child Protection
                </h3>
                <ul className="space-y-1.5 text-white/70 text-xs">
                  <li><Link href="/safeguarding" className="hover:text-white transition-colors">Child Safeguarding Code</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Feedback &amp; Reporting</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs px-2">
          <p>© {new Date().getFullYear()} Kwagala Children&apos;s Foundation. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Building hope with dignity, love &amp; transparency</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
