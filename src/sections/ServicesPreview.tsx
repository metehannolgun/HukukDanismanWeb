import React from 'react'

const services = [
  { title: "Aile Hukuku", desc: "Boşanma, velayet, nafaka ve aile içi hukuki danışmanlık." },
  { title: "Ceza Hukuku", desc: "Savunma, dava takibi ve ceza hukuku süreçlerinde destek." },
  { title: "İş Hukuku", desc: "İşçi-işveren uyuşmazlıkları, tazminat ve iş sözleşmeleri." },
  { title: "Gayrimenkul Hukuku", desc: "Tapu işlemleri, kira sözleşmeleri ve taşınmaz davaları." },
  { title: "Ticaret Hukuku", desc: "Şirket kuruluşu, sözleşme ve ticari uyuşmazlıklar." },
];

const ServicesPreview = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 py-8  p-8">
    {services.map((service, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600">{service.desc}</p>
      </div>
    ))}
  </div>
);

export default ServicesPreview