import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "Zəmanət müddəti nə qədərdir?",
      a: "Bütün lüks saatlarımıza 2 il beynəlxalq zəmanət verilir.",
    },
    {
      q: "Ölkədaxili çatdırılma var?",
      a: "Bəli, Azərbaycanın bütün bölgələrinə çatdırılma edirik.",
    },
    {
      q: "Saatların orijinallığına necə əmin ola bilərəm?",
      a: "Hər bir saat orijinal sertifikatı və rəsmi qutusu ilə gəlir.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Sizi maraqlandıran suallar
      </h1>
      <div className="space-y-8">
        {faqs.map((f, i) => (
          <div key={i} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-3">
              0{i + 1}. {f.q}
            </h3>
            <p className="text-gray-600 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
