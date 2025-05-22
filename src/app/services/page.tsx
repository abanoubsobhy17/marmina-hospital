export default function ServicesPage() {
  return (
    <div className=" mx-auto py-12 px-4   ">
      <h1 className="text-4xl font-bold mb-8 text-center text-color-75">خدماتنا</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  shadow-lg ">


        {/* التحاليل الطبية */}
        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
          <img
            src="/marmina/doctors/download (3).jpeg"
            alt="التحاليل"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">التحاليل الطبية</h3>
            <p>نقدم جميع أنواع التحاليل بأحدث الأجهزة وبنتائج دقيقة.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
  <img
    src="/marmina/doctors/download (4).jpeg" // غيّر الصورة حسب المسار الموجود عندك
    alt="العمليات الجراحية"
    className="w-full h-64 object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">العمليات الجراحية</h3>
    <p>نقدم مجموعة متكاملة من العمليات الجراحية الدقيقة تحت إشراف أمهر الأطباء وفي غرف عمليات مجهزة بالكامل.</p>
  </div>
</div>


        {/* الأشعة والتصوير */}
        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
          <img
            src="/marmina/doctors/download (1).jpeg"
            alt="الأشعة"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">الأشعة والتصوير</h3>
            <p>أجهزة تصوير حديثة وتشخيص دقيق باستخدام الأشعة المتطورة.</p>
          </div>
        </div>

        {/* غسيل الكلى */}
        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
          <img
            src="/marmina/474152641_584427204404874_6052529563968533966_n.jpg"
            alt=" الظوارئ"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">الطوارئ</h3>
            <p>خدمة على مدار الساعة للحالات الحرجة مع فريق طبي متخصص.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
          <img
            src="/marmina/doctors/download.jpeg"
            alt="غسيل الكلى"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">غسيل الكلى</h3>
            <p>وحدة متكاملة بأجهزة حديثة وخدمة طبية آمنة ومخصصة لمرضى الكلى.</p>
          </div>
        </div>

        {/* العلاج الطبيعي */}
        <div className="bg-white rounded-xl shadow overflow-hidden w-full">
          <img
            src="/marmina/doctors/download (2).jpeg"
            alt="العلاج الطبيعي"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">العلاج الطبيعي</h3>
            <p>برنامج شامل لإعادة التأهيل باستخدام أحدث تقنيات العلاج الطبيعي.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
