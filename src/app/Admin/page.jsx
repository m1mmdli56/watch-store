"use client";
import React, { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Package,
  DollarSign,
  Tag,
  Image as ImageIcon,
  Loader2,
  ExternalLink,
} from "lucide-react";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "Classic",
    image: "",
  });

  // Məhsulları yüklə
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Yükləmə xətası:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Yeni məhsul əlavə et
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, price: Number(formData.price) }),
      });
      if (res.ok) {
        setFormData({
          name: "",
          brand: "",
          price: "",
          category: "Classic",
          image: "",
        });
        fetchProducts();
      }
    } catch (error) {
      console.error("Əlavə etmə xətası:", error);
    }
  };

  // Məhsulu sil
  const deleteProduct = async (id) => {
    if (window.confirm("Bu məhsulu silmək istədiyinizə əminsiniz?")) {
      try {
        await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        });
        fetchProducts();
      } catch (error) {
        console.error("Silmə xətası:", error);
      }
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-zinc-300" size={40} />
      </div>
    );

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Başlıq Hissəsi */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-zinc-900">
              Admin Panel
            </h1>
            <p className="text-sm text-zinc-500 mt-1">
              Məhsul bazasını buradan idarə edin.
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-zinc-100 flex items-center gap-3">
            <Package className="text-zinc-400" size={20} />
            <span className="text-sm font-bold">{products.length} Məhsul</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SOL TƏRƏF: Yeni Məhsul Formu */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 sticky top-28">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Plus size={20} className="text-zinc-900" /> Yeni Məhsul
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Model Adı
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="Məs: Submariner"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-zinc-900 transition"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Brend
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Rolex"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-zinc-900"
                      value={formData.brand}
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Qiymət ($)
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="5000"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-zinc-900"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Kateqoriya
                  </label>
                  <select
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-zinc-900 appearance-none"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option value="Classic">Classic</option>
                    <option value="Sport">Sport</option>
                    <option value="Smart">Smart</option>
                    <option value="Diver">Diver</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Şəkil URL
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="https://..."
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-zinc-900"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-zinc-900 text-white rounded-xl py-4 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all shadow-lg shadow-zinc-200 mt-4"
                >
                  Əlavə Et
                </button>
              </form>
            </div>
          </div>

          {/* SAĞ TƏRƏF: Məhsul Siyahısı */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-100">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Məhsul
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Kateqoriya
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                        Qiymət
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-right">
                        Əməliyyat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="hover:bg-zinc-50/50 transition"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden shrink-0">
                              <img
                                src={product.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-zinc-900">
                                {product.name}
                              </p>
                              <p className="text-[10px] text-zinc-400 uppercase tracking-tighter">
                                {product.brand}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-500">
                          <span className="px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold text-zinc-600">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-zinc-900">
                          ${product.price?.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="p-2 text-zinc-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
