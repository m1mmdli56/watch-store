"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Search,
  User,
  X,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Səbət sayını yenilə
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("cartUpdated", updateCount);

    // ESC düyməsi ilə axtarışı bağlamaq
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {/* --- AXTARIŞ MODALI (SEARCH OVERLAY) --- */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 bg-white animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex flex-col">
            {/* Üst Hissə: Geri və Bağla */}
            <div className="flex justify-between items-center py-10">
              <button
                onClick={() => setIsSearchOpen(false)}
                className="flex items-center gap-2 text-zinc-400 hover:text-black transition-all group"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Geri qayıt
                </span>
              </button>

              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-zinc-100 rounded-full transition text-zinc-400 hover:text-black"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Orta Hissə: Input */}
            <div className="flex-1 flex flex-col items-center pt-20">
              <div className="w-full max-w-3xl">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-6 text-center">
                  Nə axtarırsınız?
                </p>
                <div className="relative border-b border-zinc-200 focus-within:border-zinc-900 transition-colors pb-6">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Model, brend və ya kateqoriya..."
                    className="w-full bg-transparent text-4xl md:text-6xl font-serif outline-none placeholder:text-zinc-100"
                  />
                  <Search
                    className="absolute right-0 top-2 text-zinc-900"
                    size={30}
                    strokeWidth={1}
                  />
                </div>

                {/* Populyar Teqlər */}
                <div className="mt-12 flex flex-wrap gap-3 justify-center">
                  {["#Rolex", "#Classic", "#Smart", "#Diver", "#Gold"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="cursor-pointer px-5 py-2 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:bg-black hover:text-white hover:border-black transition-all"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Alt Hissə: Köməkçi mətn */}
            <div className="py-10 text-center">
              <p className="text-[9px] text-zinc-300 uppercase tracking-[0.3em]">
                Çıxmaq üçün <span className="font-bold">[ESC]</span> düyməsinə
                basın
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-sm py-2"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-black tracking-tighter text-zinc-900"
          >
            HOROLOGO
          </Link>

          {/* Menyu */}
          <div className="hidden md:flex items-center space-x-10">
            {["Shop", "Collections", "Brands"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-zinc-900 transition group relative"
              >
                {item === "Shop"
                  ? "Mağaza"
                  : item === "Collections"
                    ? "Kolleksiya"
                    : "Brendlər"}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-zinc-900 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* İkonlar */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-zinc-700 hover:bg-zinc-50 rounded-full transition"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <Link
              href="/Admin"
              className="flex items-center gap-1 p-2 text-zinc-700 hover:bg-zinc-50 rounded-full transition group"
              title="Admin Panel"
            >
              <User size={20} strokeWidth={1.5} />
              <ShieldCheck
                size={12}
                className="text-zinc-400 opacity-0 group-hover:opacity-100 transition"
              />
            </Link>

            <Link
              href="/Cart"
              className="p-2 text-zinc-700 hover:bg-zinc-50 rounded-full relative group"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
