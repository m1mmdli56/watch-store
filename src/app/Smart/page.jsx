"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Check,
  Loader2,
  Cpu,
  Battery,
  Activity,
  Zap,
} from "lucide-react";
import Link from "next/link";

const SmartWatches = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        // Yalnız Smart kateqoriyasını seçirik
        const smartItems = data.filter((item) => item.category === "Smart");
        setProducts(smartItems);
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Tech Header Section */}
      <div className="bg-white border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap size={14} /> Gələcəyi Biləyində Daşı
          </div>
          <h1 className="text-5xl md:text-6xl font-sans font-black text-slate-900 tracking-tight mb-6">
            Smart <span className="text-blue-600">Series</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Yüksək texnologiya, sağlamlıq monitorinqi və kəsintisiz bağlantı.
            Həyat ritminizə uyğun ən son nəsil ağıllı saatlar.
          </p>

          {/* Quick Specs Icons */}
          <div className="flex justify-center gap-8 mt-10 text-slate-400">
            <div className="flex flex-col items-center gap-2">
              <Activity size={20} />
              <span className="text-[10px] uppercase font-bold">Sağlamlıq</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Battery size={20} />
              <span className="text-[10px] uppercase font-bold">Uzun Ömür</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Cpu size={20} />
              <span className="text-[10px] uppercase font-bold">
                Sürətli Prosessor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Image Holder */}
                <div className="relative aspect-square overflow-hidden rounded-4xl bg-slate-50 mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <button
                    onClick={() => addToCart(product)}
                    className={`absolute bottom-4 right-4 p-4 rounded-2xl shadow-xl transition-all duration-300 ${
                      addedId === product.id
                        ? "bg-green-500 text-white"
                        : "bg-slate-900 text-white hover:bg-blue-600"
                    }`}
                  >
                    {addedId === product.id ? (
                      <Check size={20} />
                    ) : (
                      <ShoppingBag size={20} />
                    )}
                  </button>
                </div>

                {/* Info */}
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">
                        {product.brand}
                      </p>
                      <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <span className="text-lg font-black text-slate-900">
                      ${product.price?.toLocaleString()}
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-md font-bold uppercase">
                      Stokda var
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="bg-white border border-dashed border-slate-200 rounded-3xl p-12">
                <p className="text-slate-400 italic">
                  Smart saatlar kolleksiyası tezliklə yenilənəcək.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartWatches;
