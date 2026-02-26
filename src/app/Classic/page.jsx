"use client";
import React, { useState, useEffect } from "react";
import { ShoppingBag, Check, Loader2, ChevronRight } from "lucide-react";
import Link from "next/link";

const Classic = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        const classicItems = data.filter(
          (item) => item.category === "Classic" || item.category === "Dress",
        );
        setProducts(classicItems);
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
        <Loader2 className="animate-spin text-zinc-300" size={40} />
      </div>
    );

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Klassik Header - Daha elastik hündürlük */}
      <div className="relative min-h-87.5 py-20 flex items-center justify-center bg-zinc-900">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080')",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <nav className="flex justify-center items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-8">
            <Link href="/" className="hover:text-white transition">
              Ana Səhifə
            </Link>
            <ChevronRight size={10} />
            <span className="text-zinc-300">Kolleksiya</span>
            <ChevronRight size={10} />
            <span className="text-white">Klassik</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight italic mb-6">
            Timeless Elegance
          </h1>
          <div className="w-16 h-px bg-zinc-700 mx-auto mb-6" />
          <p className="text-zinc-400 max-w-xl mx-auto text-xs md:text-sm font-light leading-relaxed tracking-wide">
            Nəsillərdən nəsillərə ötürülən, dəbdən düşməyən klassik dizaynlar və
            incə sənətkarlıq nümunələri.
          </p>
        </div>
      </div>

      {/* Məhsul Grid-i - Margin-ləri stabil etdik */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                {/* Şəkil Qutusu */}
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-white border border-zinc-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Düymə */}
                  <button
                    onClick={() => addToCart(product)}
                    className={`absolute bottom-6 right-6 p-4 rounded-2xl shadow-xl transition-all duration-300 ${
                      addedId === product.id
                        ? "bg-green-500 text-white"
                        : "bg-white/95 text-zinc-900 hover:bg-black hover:text-white"
                    }`}
                  >
                    {addedId === product.id ? (
                      <Check size={20} />
                    ) : (
                      <ShoppingBag size={20} />
                    )}
                  </button>
                </div>

                {/* İnfo Hissəsi */}
                <div className="mt-8 text-center space-y-2">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold block">
                    {product.brand}
                  </span>
                  <h3 className="text-lg font-medium text-zinc-800 tracking-tight group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-px w-4 bg-zinc-200"></span>
                    <p className="text-base font-light text-zinc-900 italic">
                      ${product.price?.toLocaleString()}
                    </p>
                    <span className="h-px w-4 bg-zinc-200"></span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-zinc-400 italic border border-dashed border-zinc-200 rounded-3xl">
              Bu kateqoriyada hələ ki, məhsul yoxdur.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classic;
