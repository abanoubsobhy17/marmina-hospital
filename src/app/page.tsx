'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // استيراد CSS الخاص بـ Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Home() {
  
  const router = useRouter();
  return (
    <>    
      <header
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-4"
        style={{ backgroundImage: "url('/marmina/474152641_584427204404874_6052529563968533966_n.jpg')" }}
      >
        {/* Overlay علشان نخلي الكلام يبان بوضوح */}
        <div className="absolute inset-0  "></div>

        <div className="relative z-10 text-center bg-black  opacity-50 rounded-full p-3 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 color-me">
            🏥 مارمينا - مستشفى الرعاية الكاملة
          </h1>
          <p className="text-lg md:text-xl mb-8">
            نقدم لك رعاية صحية متكاملة بأحدث الأجهزة الطبية وفريق طبي متخصص.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
            onClick={() => router.push('/appointment')}
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition cursor-pointer"
>
  احجز الآن
</button>

            <Link href="/services">
  <button className="border border-white px-6 py-3 hover:underline hover:scale-105 duration-300
    rounded-lg font-semibold hover:bg-white hover:text-red-600 transition cursor-pointer">
    تعرّف على خدماتنا <span className="ml-2">🔍</span>
  </button>
</Link>
          </div>
        </div>
      </header>
      
<section
  className="relative bg-fixed bg-center mt-7 bg-cover  text-center text-white py-32 px-4"
  style={{
    backgroundImage: "url('/marmina/474277123_586507727530155_2737007265162540319_n.jpg')",
  }}
>
  <div className="absolute inset-0   bg-opacity-60"></div> {/* للتظليل عشان النص يبان */}

  <div className="relative z-10 text-center bg-gradient-to-b from-gray-100 to-gray-700 rounded-2xl shadow-lg  opacity-90 p-3">
    <h2 className="text-4xl font-bold mb-6 text-black">من نحن</h2>
    <p className="text-lg leading-relaxed text-black max-w-2xl mx-auto">
      مستشفى مارمينا هي منشأة طبية رائدة تقدم رعاية صحية متكاملة منذ أكثر من 20 عامًا.
      نتميز باستخدام أحدث التقنيات الطبية ونعمل بفريق طبي مؤهل يضع صحة المريض أولاً.
    </p>
  </div>
</section>


      <section className="py-16 px-4 bg-">
        <h2 className="text-3xl font-bold text-color text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg bg-color transition">
            <h3 className="text-xl font-semibold mb-2">الطوارئ</h3>
            <p className="text-white">فريق جاهز على مدار الساعة للتعامل مع الحالات الحرجة.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg bg-color transition">
            <h3 className="text-xl font-semibold mb-2">التحاليل الطبية</h3>
            <p className="text-white">أحدث معدات التحاليل لضمان دقة النتائج وسرعتها.</p>
          </div>
          <div className="p-6 border rounded-lg bg-color shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">الأشعة والتصوير</h3>
            <p className="text-white">أجهزة أشعة متطورة لتشخيص دقيق.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-color mb-8 text-center">فريق الأطباء</h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // ← هنا

          spaceBetween={30} // المسافة بين الصور
          slidesPerView={3} // عدد الصور الظاهرة في نفس الوقت
          breakpoints={{
            640: { slidesPerView: 2 }, // عند الحجم المتوسط يعرض صورتين
            1024: { slidesPerView: 3 }, // عند الحجم الكبير يعرض 3 صور
          }}
          loop={true} // العبور التلقائي
            autoplay={{ delay: 3000 }} // ← يخليها تقلب لوحدها وتسمح بالتفاعل اليدوي
          pagination={{ clickable: true }} // تفعيل التمرير بالضغط
          className="max-w-6xl mx-auto"
        >
          <SwiperSlide>
            <div className="p-4 text-center">
              <img src="/marmina/doctors/480605298_608924935288434_90084295802337332_n.jpg" alt="Doctor 1" className="w-full  object-cover rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 text-center">
              <img src="/marmina/doctors/481272984_618314407682820_3130228502180526098_n.jpg" alt="Doctor 2" className="w-full  object-cover rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-4 text-center">
              <img src="/marmina/doctors/484141332_623580907156170_2783620423360782501_n.jpg" alt="Doctor 3" className="w-full  object-cover rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 text-center">
              <img src="/marmina/doctors/484471289_626652510182343_3697244685622844853_n.jpg" alt="Doctor 3" className="w-full  object-cover rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 text-center">
              <img src="/marmina/doctors/481902261_619774810870113_1498802918590726985_n.jpg" alt="Doctor 3" className="w-full  object-cover rounded-lg shadow-lg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
