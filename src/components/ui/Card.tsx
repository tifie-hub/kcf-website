import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "glass" | "glassDark";
}

export function Card({ children, className = "", variant = "glass", ...props }: CardProps) {
  const baseStyles = "rounded-3xl overflow-hidden transition-all duration-300";
  const variants = {
    default: "glass-card",
    glass: "glass-card",
    elevated: "glass-card hover:-translate-y-1.5 shadow-[0_20px_40px_rgba(15,41,30,0.12)]",
    bordered: "glass-card border-2 border-white/80",
    glassDark: "glass-panel-dark text-white rounded-3xl",
  };

  return (
    <div className={`${baseStyles} ${variants[variant] || variants.glass} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-8 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-8 pt-8 pb-4 border-b border-white/20 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-8 py-5 bg-white/30 backdrop-blur-md border-t border-white/30 ${className}`}>{children}</div>;
}

