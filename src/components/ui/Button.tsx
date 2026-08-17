import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "donate" | "secondary" | "success" | "glass" | "outline";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-full transition-all duration-300 transform active:scale-95 shadow-sm";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--kcf-emerald)] to-[#1E6B47] text-white hover:shadow-[0_12px_30px_rgba(20,69,47,0.35)] hover:-translate-y-0.5 border border-white/20",
    donate:
      "bg-gradient-to-r from-[var(--kcf-pink)] to-[#F43F5E] text-white hover:shadow-[0_12px_30px_rgba(225,29,72,0.4)] hover:-translate-y-0.5 border border-white/25",
    secondary:
      "bg-white/70 backdrop-blur-md text-[var(--kcf-emerald)] border border-white/80 hover:bg-white hover:shadow-lg hover:-translate-y-0.5",
    success:
      "bg-gradient-to-r from-[var(--kcf-green)] to-[#059669] text-white hover:shadow-[0_12px_30px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 border border-white/20",
    glass:
      "bg-white/40 backdrop-blur-xl text-[var(--kcf-emerald)] border border-white/60 hover:bg-white/60 hover:border-white hover:shadow-md hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-[var(--kcf-emerald)] text-[var(--kcf-emerald)] hover:bg-[var(--kcf-emerald)] hover:text-white hover:shadow-lg hover:-translate-y-0.5",
  };

  const variantStyles = variants[variant] || variants.primary;
  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}

