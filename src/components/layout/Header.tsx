"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "WHAT WE DO", href: "/programmes" },
    { label: "OUR IMPACT", href: "/impact" },
    { label: "GET INVOLVED", href: "/get-involved" },
    { label: "STORIES & NEWS", href: "/stories" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="sticky top-3 z-50 px-3 md:px-6 max-w-[1500px] w-full mx-auto">
      <div className="glass-panel rounded-full px-5 md:px-8 py-2.5 flex items-center justify-between shadow-[0_12px_40px_rgba(15,41,30,0.08)]">
        {/* Logo area */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative overflow-hidden rounded-2xl p-1 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Kwagala Children's Foundation Logo"
              width={240}
              height={75}
              className="object-contain max-h-14 md:max-h-16 w-auto"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3.5 font-bold text-[11px] xl:text-xs tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--kcf-text-primary)] hover:text-[var(--kcf-emerald)] px-2.5 py-1.5 rounded-full hover:bg-white/60 transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="donate" href="/donate" className="ml-1 py-2 px-5 text-[11px] xl:text-xs whitespace-nowrap shadow-[0_10px_25px_rgba(225,29,72,0.35)]">
            DONATE ❤️
          </Button>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-full bg-white/60 text-[var(--kcf-text-primary)] hover:bg-white transition-colors border border-white/80 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 glass-panel rounded-3xl p-6 shadow-2xl space-y-3 animate-in fade-in duration-200 border border-white/80">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold text-sm text-[var(--kcf-text-primary)] hover:text-[var(--kcf-emerald)] hover:bg-white/70 px-4 py-2.5 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/40">
            <Button variant="donate" href="/donate" className="w-full justify-center text-sm py-3">
              DONATE ❤️
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}


