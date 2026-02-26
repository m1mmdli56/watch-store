"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Check,
  Loader2,
  Timer,
  Wind,
  Waves,
  Trophy,
} from "lucide-react";

const Sport = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        // Sport, Diver və Racing kateqoriyalarını süzürük
        const sportItems = data.filter(
          (item) =>
            item.category === "Sport" ||
            item.category === "Diver" ||
            item.category === "Racing",
        );
        setProducts(sportItems);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item) => item.id === product.id);
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 800);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="animate-spin text-orange-500" size={40} />
      </div>
    );

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-32">
      {/* Sport Hero Banner */}
      <div className="relative h-125 flex items-center overflow-hidden border-b border-zinc-800">
        <div
          className="absolute inset-0 opacity-50 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="inline-flex items-center gap-2 bg-orange-600 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-tighter mb-6 italic">
            <Timer size={14} /> Limitləri Aş
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            ADRENALİN VƏ <br /> <span className="text-orange-600">SÜRƏT</span>
          </h1>
          <p className="text-zinc-400 max-w-md text-sm md:text-base font-light leading-relaxed">
            Ekstremal şəraitlər üçün hazırlanmış, suya davamlı və zərbəyə
            dözümlü peşəkar sport saatları.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Category Icons */}
        <div className="grid grid-cols-3 gap-4 mb-20">
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl flex flex-col items-center gap-3">
            <Waves className="text-orange-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Diver
            </span>
          </div>
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl flex flex-col items-center gap-3">
            <Wind className="text-orange-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Racing
            </span>
          </div>
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl flex flex-col items-center gap-3">
            <Trophy className="text-orange-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Sport
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              {/* Image Box */}
              <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-orange-600/50 transition-all duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Price Tag Overlay */}
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-black px-3 py-1 -skew-x-12">
                  ${product.price?.toLocaleString()}
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className={`absolute bottom-6 right-6 p-5 rounded-full shadow-2xl transition-all duration-300 ${
                    addedId === product.id
                      ? "bg-green-500 text-white rotate-360"
                      : "bg-white text-black hover:bg-orange-600 hover:text-white"
                  }`}
                >
                  {addedId === product.id ? (
                    <Check size={22} />
                  ) : (
                    <ShoppingBag size={22} />
                  )}
                </button>
              </div>

              {/* Info */}
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-orange-600 text-[10px] font-black uppercase tracking-tighter italic mb-1">
                    {product.brand}
                  </p>
                  <h3 className="text-xl font-bold uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                </div>
                <div className="text-[10px] text-zinc-500 font-bold border border-zinc-800 px-2 py-1 uppercase italic">
                  {product.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sport;
