"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.from("appointments").insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.doctor,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("حدث خطأ أثناء الحجز:", error.message);
      alert("حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى.");
    } else {
      console.log("تم الحجز بنجاح:", data);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
      });
      
      // إعادة تحميل الصفحة بعد ثانيتين إذا كنت تريد رؤية التغيير فوراً
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-10 bg-gradient-to-b from-red-100 to-red-700 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">حجز موعد</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow">
        <input
          type="text"
          name="fullName"
          placeholder="الاسم الكامل"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="رقم الموبايل"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        >
          <option value="">اختر القسم</option>
          <option value="cardiology">قلب</option>
          <option value="dermatology">جلدية</option>
          <option value="pediatrics">أطفال</option>
          <option value="orthopedics">عظام</option>
        </select>

        <input
          type="text"
          name="doctor"
          placeholder="اسم الطبيب (اختياري)"
          value={formData.doctor}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        <textarea
          name="notes"
          placeholder="ملاحظات (اختياري)"
          value={formData.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl resize-none"
          rows={4}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
        >
          {loading ? "جاري الحجز..." : "تأكيد الحجز"}
        </button>

        {success && (
          <p className="text-green-600 text-center mt-4 font-medium">تم الحجز بنجاح 🎉</p>
        )}
      </form>
    </div>
  );
}