"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Check,
  Loader2,
  ArrowDown,
  ArrowUp,
  LayoutGrid,
} from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:3000/products", {
          signal: controller.signal,
        });
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") setLoading(false);
      }
    };
    loadData();
    return () => controller.abort();
  }, []);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const itemIndex = existingCart.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      existingCart[itemIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // --- NAVBAR-I YENİLƏMƏK ÜÇÜN SİQNAL GÖNDƏRİRİK ---
    window.dispatchEvent(new Event("cartUpdated"));

    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 800);
  };

  const handleVisibility = () => {
    if (visibleCount < products.length) {
      setVisibleCount((prev) => prev + 4);
    } else {
      setVisibleCount(8);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2
          className="animate-spin text-zinc-300"
          size={40}
          strokeWidth={1}
        />
      </div>
    );

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-32">
      {/* Shop Info Header */}
      <div className="bg-white border-b border-zinc-100 py-10 mb-12">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-serif font-bold text-zinc-900 tracking-tighter">
              Mağaza
            </h1>
            <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] mt-2">
              Premium Watch Collection
            </p>
          </div>
          <div className="flex items-center gap-2 pb-1">
            <LayoutGrid size={16} className="text-zinc-900" />
            <span className="text-[10px] font-bold tracking-widest text-zinc-900">
              {products.length} MƏHSUL
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* IMAGE BOX - TAM DOLU VƏ KVADRAT */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f3f3f3] shadow-sm transition-all duration-700 hover:shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className={`absolute bottom-4 right-4 p-4 rounded-full shadow-2xl transition-all duration-300 ${
                    addedId === product.id
                      ? "bg-green-500 text-white scale-110"
                      : "bg-white text-black translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  {addedId === product.id ? (
                    <Check size={18} />
                  ) : (
                    <ShoppingBag size={18} />
                  )}
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-6 space-y-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                      {product.brand}
                    </p>
                    <h3 className="text-sm font-semibold text-zinc-900 truncate max-w-37.5">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-zinc-900">
                    ${product.price?.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 flex justify-center">
          <button
            onClick={handleVisibility}
            className="px-10 py-4 border border-zinc-200 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all rounded-full"
          >
            {visibleCount < products.length ? "Daha çox kəşf et" : "Başa qayıt"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
