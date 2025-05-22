"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

// أيقونات الأقسام
const departmentIcons: Record<string, string> = {
  cardiology: "/marmina/doctors/download (6).jpeg",
  dermatology: "/marmina/doctors/download.png",
  // تقدر تضيف باقي الأقسام هنا
};

// نوع البيانات
interface Appointment {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  doctor: string;
  department: string;
  date: string;
  time: string;
  notes?: string;
}

export default function Dashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDept, setOpenDept] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching appointments:", error.message);
        alert("حدث خطأ أثناء جلب البيانات");
      } else {
        setAppointments(data || []);
      }
      setLoading(false);
    };

    fetchAppointments();

    const channel = supabase
      .channel("realtime_appointments")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "appointments" },
        () => fetchAppointments()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // حذف مريض واحد
  const handleDeleteOne = async (id: number) => {
    const { error } = await supabase.from("appointments").delete().eq("id", id);
    if (error) {
      alert("حدث خطأ أثناء حذف المريض");
    } else {
      setAppointments(prev => prev.filter(app => app.id !== id));
    }
  };

  // حذف جميع المرضى في القسم
  const handleDeleteAll = async (dept: string) => {
    const confirmDelete = confirm(`هل أنت متأكد من حذف كل المرضى في قسم ${dept}؟`);
    if (!confirmDelete) return;

    const { error } = await supabase.from("appointments").delete().eq("department", dept);
    if (error) {
      alert("حدث خطأ أثناء حذف المرضى");
    } else {
      setAppointments(prev => prev.filter(app => app.department !== dept));
    }
  };

  // تجميع الحجوزات حسب القسم
  const groupedByDepartment = appointments.reduce((acc, appointment) => {
    const dept = appointment.department || "غير محدد";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(appointment);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">لوحة التحكم – الحجوزات</h2>

      {loading ? (
        <p className="text-center py-10">جاري تحميل البيانات...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center py-10">لا توجد حجوزات متاحة</p>
      ) : (
        Object.entries(groupedByDepartment).map(([dept, apps]) => (
          <div key={dept} className="mb-6 border rounded-lg shadow overflow-hidden">
            <button
              onClick={() => setOpenDept(openDept === dept ? null : dept)}
              className="w-full flex items-center justify-between p-4 bg-blue-100 hover:bg-blue-200 transition cursor-pointer"
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <img
                  src={departmentIcons[dept] || "/marmina/doctors/images.jpeg"}
                  alt={dept}
                  className="w-10 h-10"
                />
                <span className="font-semibold text-lg capitalize">{dept}</span>
              </div>
              <span>{openDept === dept ? "▲" : "▼"}</span>
            </button>

            {openDept === dept && (
              <div className="bg-white p-4">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => handleDeleteAll(dept)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    حذف كل المرضى في القسم
                  </button>
                </div>

                {apps.map((app: Appointment) => (
                  <div
                    key={app.id}
                    className="mb-4 p-3 border rounded-lg bg-gray-50 shadow-sm"
                  >
                    <p><strong>الاسم:</strong> {app.full_name}</p>
                    <p><strong>البريد:</strong> {app.email}</p>
                    <p><strong>الهاتف:</strong> {app.phone}</p>
                    <p><strong>الطبيب:</strong> {app.doctor}</p>
                    <p><strong>التاريخ:</strong> {app.date}</p>
                    <p><strong>الوقت:</strong> {app.time}</p>
                    <p><strong>ملاحظات:</strong> {app.notes || "لا توجد"}</p>
                    <button
                      onClick={() => handleDeleteOne(app.id)}
                      className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      حذف المريض
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
      
    <Link href="/dashboard/add-doctor" className="block py-2 px-4 hover:bg-gray-100">
  ➕ إضافة طبيب
</Link>

    </div>
  );
}
