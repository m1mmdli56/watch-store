"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // 1. Məlumatları LocalStorage-dən oxuyuruq
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
    setIsClient(true);
  }, []);

  // 2. LocalStorage-i və State-i eyni anda yeniləyən köməkçi funksiya
  const syncCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <RefreshCw className="animate-spin text-gray-200" size={48} />
      </div>
    );
  }

  // --- Funksiyalar ---

  const handleQuantity = (id, action) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQty =
          action === "plus" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(1, newQty) };
      }
      return item;
    });
    syncCart(updatedCart);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bu məhsulu səbətdən silmək istəyirsiniz?")) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      syncCart(updatedCart);
    }
  };

  // Hesablamalar
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.05;
  const shipping = cartItems.length > 0 ? 50 : 0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-[#fafafa] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-black uppercase">
            SƏBƏTİNİZ
          </h1>
          <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold">
            {cartItems.length} MƏHSUL
          </span>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* SOL TƏRƏF: Məhsulların Siyahısı */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-8 bg-white p-6 rounded-4xl shadow-sm border border-gray-50 transition-all hover:shadow-md"
                >
                  <div className="w-32 h-32 bg-[#f9f9f9] rounded-2xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/200?text=Watch";
                      }}
                    />
                  </div>

                  <div className="grow w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                          {item.brand}
                        </p>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 bg-red-50 text-red-400 rounded-full hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Miqdar Redaktəsi */}
                      <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                        <button
                          onClick={() => handleQuantity(item.id, "minus")}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-5 font-bold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantity(item.id, "plus")}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-black text-black tracking-tighter">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/Shop"
                className="inline-flex items-center gap-3 text-gray-400 font-bold text-xs tracking-widest hover:text-black transition-all pt-4"
              >
                <ArrowLeft size={16} /> ALIŞ-VERİŞƏ DAVAM ET
              </Link>
            </div>

            {/* SAĞ TƏRƏF: Hesab-faktura */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-50 h-fit sticky top-28">
              <h2 className="text-xl font-bold mb-8 text-black tracking-tight">
                Sifariş Xülasəsi
              </h2>

              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-400">Məbləğ</span>
                  <span className="font-bold">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Çatdırılma</span>
                  <span className="font-bold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vergi (5%)</span>
                  <span className="font-bold">${tax.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between border-t border-dashed pt-6 mb-10">
                <span className="text-lg font-bold">TOPLAM</span>
                <span className="text-3xl font-black text-black tracking-tighter">
                  ${total.toLocaleString()}
                </span>
              </div>

              <button className="w-full bg-black text-white py-5 rounded-3xl font-bold hover:bg-zinc-800 transition-all uppercase tracking-widest text-xs active:scale-95 shadow-xl shadow-black/10">
                ÖDƏNİŞƏ KEÇ
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[4rem] shadow-sm border border-gray-50">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart size={32} className="text-gray-200" />
            </div>
            <p className="text-gray-400 text-lg mb-8 italic font-serif">
              Səbətiniz boşdur.
            </p>
            <Link
              href="/Shop"
              className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all uppercase text-xs tracking-widest shadow-lg"
            >
              Mağazanı Kəşf Et
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
