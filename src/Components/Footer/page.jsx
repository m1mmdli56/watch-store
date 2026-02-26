"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          {/* Brend Haqqında */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">HOROLOGO</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              1992-ci ildən bəri ən nadir və lüks saatların rəsmi satış mərkəzi.
              Dəqiqlik bizim imzamızdır.
            </p>
          </div>

          {/* Sürətli Keçid */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
              Mağaza
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/Classic"
                  className="hover:text-white transition"
                >
                  Klassik Saatlar
                </Link>
              </li>
              <li>
                <Link
                  href="/Sport"
                  className="hover:text-white transition"
                >
                  İdman Saatları
                </Link>
              </li>
              <li>
                <Link
                  href="/Smart"
                  className="hover:text-white transition"
                >
                  Smart Saatlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Dəstək */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
              Müştəri Xidməti
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/Faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/Shipping" className="hover:text-white transition">
                  Çatdırılma
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-white transition">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">
              Yeniliklərdən Xəbərdar Ol
            </h4>
            <div className="flex border-b border-gray-700 pb-2">
              <input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="bg-transparent border-none outline-none text-sm w-full focus:ring-0 placeholder:text-gray-600"
              />
              <button className="text-xs uppercase tracking-widest font-bold">
                Qoşul
              </button>
            </div>
          </div>
        </div>

        {/* Alt Hissə */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 HOROLOGO. Bütün hüquqlar qorunur.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Instagram
              size={16}
              className="hover:text-white transition cursor-pointer"
            />
            <Facebook
              size={16}
              className="hover:text-white transition cursor-pointer"
            />
            <Linkedin
              size={16}
              className="hover:text-white transition cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
