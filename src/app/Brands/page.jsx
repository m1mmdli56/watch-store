import React from "react";

const brands = [
  {
    name: "Rolex",
    description: "Dəqiqlik və nüfuzun simvolu.",
    image:
      "/Rolex.webp",
  },
  {
    name: "Omega",
    description: "Kosmos və dəniz kəşfiyyatının mərkəzində.",
    image:
      "/Omega.jpg",
  },
  {
    name: "Patek Philippe",
    description: "Nəsildən-nəslə ötürülən sənət əsəri.",
    image:
      "/Patek.webp",  },
  {
    name: "Audemars Piguet",
    description: "Müasir lüksün və cəsarətin vəhdəti.",
    image:
      "/Audemars.jpg",
  },
  {
    name: "Tissot",
    description: "İsveçrə keyfiyyəti hər kəs üçün.",
    image:
      "/Tissot.webp",
  },
  {
    name: "Seiko",
    description: "Yapon mühəndisliyinin mükəmməlliyi.",
    image:
      "/Seiko.webp",
  },
];

const Brands = () => {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            Rəsmi Tərəfdaşlarımız
          </h1>
          <div className="h-1 w-20 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Dünyanın ən nüfuzlu saat istehsalçıları ilə birbaşa əməkdaşlıq
            edərək, sizə yalnız orijinal və eksklüziv modellər təqdim edirik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Şəkil Hissəsi */}
              <div className="h-64 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Məlumat Hissəsi */}
              <div className="p-8 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-serif font-bold tracking-widest uppercase">
                    {brand.name}
                  </h3>
                  <div className="h-px grow mx-4 bg-gray-200"></div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  {brand.description}
                </p>

                <div className="mt-6 flex items-center text-xs font-bold tracking-widest uppercase text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  Kolleksiyaya bax →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
