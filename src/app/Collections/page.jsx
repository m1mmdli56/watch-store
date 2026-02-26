import React from "react";

const Collections = () => {
  const collections = [
    {
      name: "Vintage 1970",
      count: "12 Model",
      img: "/Vintage.jpg",
    },
    {
      name: "Modern Minimalist",
      count: "8 Model",
      img: "/Modern.jpg",
    },
    {
      name: "Diver Series",
      count: "5 Model",
      img: "/Diver.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-serif mb-12 uppercase tracking-tighter">
        Kolleksiyalar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div
            key={col.name}
            className="relative group overflow-hidden rounded-xl h-100 cursor-pointer"
          >
            <img
              src={col.img}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold">{col.name}</h2>
              <p className="text-sm opacity-80">{col.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
