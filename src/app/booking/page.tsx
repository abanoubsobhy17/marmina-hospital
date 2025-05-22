"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    doctor: "",
    department: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const { error } = await supabase.from("appointments").insert([formData]);

    if (error) {
      alert("حدث خطأ أثناء الحجز");
    } else {
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        doctor: "",
        department: "",
        date: "",
        time: "",
        notes: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">احجز موعدك</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="full_name" placeholder="الاسم الكامل" onChange={handleChange} value={formData.full_name} required className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="البريد الإلكتروني" onChange={handleChange} value={formData.email} required className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="رقم الهاتف" onChange={handleChange} value={formData.phone} required className="w-full p-2 border rounded" />
        <input type="text" name="doctor" placeholder="اسم الدكتور" onChange={handleChange} value={formData.doctor} required className="w-full p-2 border rounded" />
        <select name="department" onChange={handleChange} value={formData.department} required className="w-full p-2 border rounded">
          <option value="">اختر القسم</option>
          <option value="cardiology">قلب</option>
          <option value="dermatology">جلدية</option>
          {/* تقدر تزود الأقسام هنا */}
        </select>
        <input type="date" name="date" onChange={handleChange} value={formData.date} required className="w-full p-2 border rounded" />
        <input type="time" name="time" onChange={handleChange} value={formData.time} required className="w-full p-2 border rounded" />
        <textarea name="notes" placeholder="ملاحظات إضافية (اختياري)" onChange={handleChange} value={formData.notes} className="w-full p-2 border rounded" />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          {loading ? "جارٍ الإرسال..." : "احجز الآن"}
        </button>
        {success && <p className="text-green-600 text-center mt-2">تم إرسال الحجز بنجاح</p>}
      </form>
    </div>
  );
}
