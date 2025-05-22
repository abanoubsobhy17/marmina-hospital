'use client';
import { useState } from 'react';

export default function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    phone: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // هنا تقدر تبعت البيانات لـ API أو تخزنها في localStorage مؤقتًا
    console.log('تمت إضافة الدكتور:', doctor);

    // بعد الحفظ، نظف النموذج
    setDoctor({ name: '', specialty: '', phone: '', image: '' });
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-center mb-6">إضافة طبيب جديد 👨‍⚕️</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          name="name"
          placeholder="اسم الطبيب"
          value={doctor.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="specialty"
          placeholder="التخصص"
          value={doctor.specialty}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="رقم الهاتف"
          value={doctor.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <input
          type="file"
          name="image"
          placeholder="رابط صورة الطبيب"
          value={doctor.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          إضافة الطبيب
        </button>
      </form>
    </div>
  );
}

