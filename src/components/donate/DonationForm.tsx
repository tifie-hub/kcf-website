"use client";

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function DonationForm() {
  const [currency, setCurrency] = useState<"USD" | "UGX">("USD");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | "custom">(30);
  const [customAmount, setCustomAmount] = useState<string>("");

  const presetAmountsUSD = [1, 5, 15, 30, 100];
  const presetAmountsUGX = [10000, 25000, 50000, 100000, 250000];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const paramAmount = params.get("amount");
      if (paramAmount) {
        const parsed = Number(paramAmount);
        if (!isNaN(parsed) && parsed > 0) {
          setCurrency("USD");
          if (presetAmountsUSD.includes(parsed)) {
            setAmount(parsed);
          } else {
            setAmount("custom");
            setCustomAmount(parsed.toString());
          }
        }
      }
    }
  }, []);

  const handleCurrencyChange = (newCurrency: "USD" | "UGX") => {
    setCurrency(newCurrency);
    if (newCurrency === "USD") {
      setAmount(30);
      setCustomAmount("");
    } else {
      setAmount(50000);
      setCustomAmount("");
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === "custom" ? customAmount : amount;
    alert(`Proceeding to secure checkout for ${currency} ${Number(finalAmount).toLocaleString()} (${frequency})`);
  };

  const presets = currency === "USD" ? presetAmountsUSD : presetAmountsUGX;

  return (
    <form onSubmit={handleDonate} className="glass-panel rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(15,41,30,0.12)] border border-white/80">
      <div className="bg-gradient-to-r from-[var(--kcf-pale-pink)] to-white/60 p-8 text-center border-b border-white/60">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--kcf-emerald-dark)]">Support a Child. Build a Future.</h2>
        <p className="text-[var(--kcf-text-primary)] mt-2 font-medium">Your love can become someone&apos;s hope.</p>
      </div>

      <div className="p-8 space-y-6">
        {/* Currency & Frequency glass toggle */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Currency Toggle */}
          <div className="flex p-1 rounded-2xl glass-pill border border-white/80 flex-1">
            <button
              type="button"
              onClick={() => handleCurrencyChange("USD")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                currency === "USD"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-sm"
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)]"
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              onClick={() => handleCurrencyChange("UGX")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                currency === "UGX"
                  ? "bg-[var(--kcf-emerald)] text-white shadow-sm"
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)]"
              }`}
            >
              UGX (Shs)
            </button>
          </div>

          {/* Frequency Toggle */}
          <div className="flex p-1 rounded-2xl glass-pill border border-white/80 flex-1">
            <button
              type="button"
              onClick={() => setFrequency("one-time")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                frequency === "one-time" 
                  ? "bg-[var(--kcf-emerald)] text-white shadow-sm" 
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)]"
              }`}
            >
              One-Time
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 ${
                frequency === "monthly" 
                  ? "bg-[var(--kcf-emerald)] text-white shadow-sm" 
                  : "text-[var(--kcf-text-muted)] hover:text-[var(--kcf-emerald)]"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Amounts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => { setAmount(preset); setCustomAmount(""); }}
              className={`py-3 px-2 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
                amount === preset 
                  ? "border-[var(--kcf-pink)] bg-gradient-to-r from-[var(--kcf-pink)] to-[#F43F5E] text-white shadow-[0_8px_20px_rgba(225,29,72,0.3)] scale-[1.02]" 
                  : "border-white/80 bg-white/60 text-[var(--kcf-text-primary)] hover:bg-white hover:border-emerald-300 hover:shadow-md"
              }`}
            >
              {currency === "USD" ? `$${preset}` : `UGX ${preset.toLocaleString()}`}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setAmount("custom")}
            className={`py-3 px-2 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border ${
              amount === "custom" 
                ? "border-[var(--kcf-pink)] bg-gradient-to-r from-[var(--kcf-pink)] to-[#F43F5E] text-white shadow-[0_8px_20px_rgba(225,29,72,0.3)] scale-[1.02]" 
                : "border-white/80 bg-white/60 text-[var(--kcf-text-primary)] hover:bg-white hover:border-emerald-300 hover:shadow-md"
            }`}
          >
            Custom
          </button>
        </div>

        {/* Custom Amount Input */}
        {amount === "custom" && (
          <div className="relative mt-2">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-bold text-[var(--kcf-emerald)] text-sm">
              {currency === "USD" ? "$" : "UGX"}
            </span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full pl-16 pr-5 py-3.5 rounded-2xl border-2 border-[var(--kcf-pink)] bg-white/80 backdrop-blur-md focus:outline-none text-base font-bold shadow-inner"
              required
            />
          </div>
        )}

        <Button type="submit" variant="donate" className="w-full py-4 text-base md:text-lg font-bold shadow-[0_15px_30px_rgba(225,29,72,0.35)]">
          DONATE NOW ❤️
        </Button>
      </div>
    </form>
  );
}
