import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-10">Çatdırılma Şərtləri</h1>
      <div className="prose prose-lg text-gray-700">
        <h2 className="text-xl font-bold mt-6">1. Bakı daxili çatdırılma</h2>
        <p>
          Sifariş verildiyi gündən etibarən 3 saat ərzində ünvanınıza
          çatdırılır.
        </p>

        <h2 className="text-xl font-bold mt-6">2. Regionlara çatdırılma</h2>
        <p>
          Poçt və ya kuryer vasitəsilə 2-3 iş günü ərzində çatdırılma təmin
          olunur.
        </p>

        <h2 className="text-xl font-bold mt-6">3. Təhlükəsizlik</h2>
        <p>
          Bütün bağlamalarımız sığortalanır və xüsusi qoruyucu qutularda
          göndərilir.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
