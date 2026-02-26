import React from "react";
import { ShieldCheck, Clock, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Bölməsi */}
      <div className="bg-black text-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-8 tracking-tighter">
            Zamanın Keşiyində
          </h1>
          <p className="text-gray-400 text-xl leading-loose italic max-w-2xl mx-auto">
            "Horologo" sadəcə bir mağaza deyil, saat sənətinə olan ehtiramın
            nəticəsidir. Biz hər bir müştərimizə illər boyu xidmət edəcək
            mükəmməlliyi təqdim edirik.
          </p>
        </div>
      </div>

      {/* Bizim Hekayə */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative h-125 bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1000"
            alt="Saat emalatxanası"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 italic">
            Mirasımız və Missiyamız
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            1992-ci ildə kiçik bir ailə emalatxanası kimi fəaliyyətə başlayan{" "}
            <strong>Horologo</strong>, bu gün lüks saat dünyasının ən etibarlı
            ünvanlarından birinə çevrilmişdir. Bizim yolumuz sadə bir prinsip
            üzərində qurulub: Zaman qiymətlidir və onu ölçən cihaz mükəmməl
            olmalıdır.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dünyanın ən nüfuzlu brendləri ilə birbaşa əməkdaşlıq edərək, biz
            müştərilərimizə yalnız məhsul deyil, həm də nəsildən-nəslə
            ötürüləcək bir irs təqdim edirik. Hər bir saatımız orijinallıq
            sertifikatı və rəsmi zəmanətlə təmin olunur.
          </p>
        </div>
      </div>

      {/* Üstünlüklərimiz */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4 text-black">
              <ShieldCheck size={40} />
            </div>
            <h3 className="font-bold mb-2">100% Orijinallıq</h3>
            <p className="text-sm text-gray-500">
              Bütün məhsullar rəsmi sertifikatla gəlir.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4 text-black">
              <Clock size={40} />
            </div>
            <h3 className="font-bold mb-2">Usta Xidməti</h3>
            <p className="text-sm text-gray-500">
              Eksklüziv texniki servis və qulluq.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4 text-black">
              <Award size={40} />
            </div>
            <h3 className="font-bold mb-2">30 İllik Təcrübə</h3>
            <p className="text-sm text-gray-500">
              Saat sahəsində peşəkar bilik və miras.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4 text-black">
              <Globe size={40} />
            </div>
            <h3 className="font-bold mb-2">Qlobal Çatdırılma</h3>
            <p className="text-sm text-gray-500">
              Dünyanın hər nöqtəsinə təhlükəsiz göndərim.
            </p>
          </div>
        </div>
      </div>

      {/* Rəqəmlərlə Biz */}
      <div className="max-w-7xl mx-auto py-24 px-6 text-center border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-4xl font-bold block">15,000+</span>
            <span className="text-gray-500 text-sm uppercase tracking-widest">
              Məmnun Müştəri
            </span>
          </div>
          <div>
            <span className="text-4xl font-bold block">50+</span>
            <span className="text-gray-500 text-sm uppercase tracking-widest">
              Brend Partnyorluğu
            </span>
          </div>
          <div>
            <span className="text-4xl font-bold block">12</span>
            <span className="text-gray-500 text-sm uppercase tracking-widest">
              Butik Mağaza
            </span>
          </div>
          <div>
            <span className="text-4xl font-bold block">24/7</span>
            <span className="text-gray-500 text-sm uppercase tracking-widest">
              Müştəri Dəstəyi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
