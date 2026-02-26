import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-bold mb-6">Bizimlə Əlaqə</h1>
        <p className="text-gray-500 mb-8">
          Sualınız var? Bizə yazın və ya zəng edin.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MapPin /> Bakı, Azərbaycan, Nizami küç. 42
          </div>
          <div className="flex items-center gap-4">
            <Phone /> +994 (50) 123 45 67
          </div>
          <div className="flex items-center gap-4">
            <Mail /> info@horologo.com
          </div>
        </div>
      </div>
      <form className="space-y-4 bg-gray-50 p-8 rounded-2xl">
        <input
          type="text"
          placeholder="Adınız"
          className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-black outline-none"
        />
        <input
          type="email"
          placeholder="E-poçt"
          className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-black outline-none"
        />
        <textarea
          placeholder="Mesajınız"
          rows="4"
          className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-black outline-none"
        ></textarea>
        <button className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition">
          GÖNDƏR
        </button>
      </form>
    </div>
  );
};

export default Contact;
