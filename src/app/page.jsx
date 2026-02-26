import React from "react";
import Link from "next/link";
import { ArrowRight, Star, shieldCheck, Truck, Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION - Giriş Hissəsi */}
      <section className="relative h-[90vh] w-full flex items-center justify-center bg-black overflow-hidden">
        {/* Arxa fon şəkli (Public qovluğuna hero.jpg atsan daha yaxşı olar) */}
        <div className="absolute inset-0 opacity-60">
          <img
            src="/Hero.jpg"
            alt="Hero Watch"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tighter">
            ZAMANIN MÜKƏMMƏLLİYİ
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
            Dünyanın ən nadir və lüks saat kolleksiyaları indi bir klik
            uzaqlığınızda. İrsinizi biləyinizdə daşıyın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/Cart"
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              İNDİ AL <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/Collections"
              className="border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
            >
              KOLLEKSİYALAR
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED BRANDS - Brendlər (Kiçik keçid) */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 uppercase tracking-[0.3em] text-sm mb-8 font-medium">
            RƏSMİ TƏRƏFDAŞLARIMIZ
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
            <span className="text-2xl font-serif font-bold italic">ROLEX</span>
            <span className="text-2xl font-serif font-bold italic">OMEGA</span>
            <span className="text-2xl font-serif font-bold italic">PATEK</span>
            <span className="text-2xl font-serif font-bold italic">TISSOT</span>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES - Üstünlüklərimiz */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="mb-6 inline-block p-5 bg-gray-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 italic">
              Sürətli Çatdırılma
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Sifarişiniz 24 saat ərzində kuryerə təhvil verilir və sığortalı
              şəkildə ünvanınıza çatdırılır.
            </p>
          </div>
          <div className="text-center group">
            <div className="mb-6 inline-block p-5 bg-gray-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Star size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 italic">
              Orijinallıq Zəmanəti
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Satılan hər bir saat rəsmi sertifikat və beynəlxalq zəmanət talonu
              ilə təmin olunur.
            </p>
          </div>
          <div className="text-center group">
            <div className="mb-6 inline-block p-5 bg-gray-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-all">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 italic">Eksklüziv Servis</h3>
            <p className="text-gray-500 leading-relaxed">
              Alışdan sonra da sizinləyik. Saatlarınızın texniki qulluğu peşəkar
              ustalarımız tərəfindən həyata keçirilir.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION - Alt Bölmə */}
      <section className="py-20 bg-stone-100 px-6">
        <div className="max-w-5xl mx-auto bg-black rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Xüsusi Endirimlərdən Yararlanın
            </h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              Yeni kolleksiyalar və eksklüziv təkliflər haqqında ilk siz
              xəbərdar olun.
            </p>
            <div className="flex max-w-md mx-auto bg-white/10 p-2 rounded-full backdrop-blur-md">
              <input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="bg-transparent grow px-6 outline-none text-white"
              />
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-200">
                QOŞUL
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
