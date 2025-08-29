import { useState, useEffect } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const contactElement = document.getElementById('contact');
    if (contactElement) {
      observer.observe(contactElement);
    }

    return () => {
      if (contactElement) {
        observer.unobserve(contactElement);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('شكراً لتواصلكم معنا! سنرد عليكم في أقرب وقت.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const phoneNumbers = [
    "01111458668",
    "01223536536", 
    "01021521243",
    "01103031902",
    "01274075000",
    "01111458668",
    "01226891891"
  ];

  const contactInfo = [
    {
      icon: "📞",
      title: "أرقام الهاتف",
      details: phoneNumbers,
      link: "#phones"
    },
,
    {
      icon: "📍",
      title: "العنوان",
      details: ["القاهرة , المعادي"],
      link: "#"
    },

  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-blue-800 mb-6 tajawal-bold transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            اتصل بنا
          </h2>
          <p className={`text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed tajawal-regular transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            نحن هنا لمساعدتك! تواصل معنا لأي استفسارات أو لطلب خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-blue-800 mb-8 tajawal-bold">معلومات التواصل</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <div className="text-3xl text-blue-600">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-3 tajawal-bold">{item.title}</h4>
                    <div className="space-y-2">
                      {Array.isArray(item.details) ? (
                        item.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            {item.title === "أرقام الهاتف" ? (
                              <a 
                                href={`tel:${detail}`}
                                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 tajawal-regular block py-1 hover:underline"
                              >
                                {detail}
                              </a>
                            ) : item.title === "البريد الإلكتروني" && detailIndex === 0 ? (
                              <a 
                                href={item.link}
                                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 tajawal-regular block py-1 hover:underline"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p className="text-blue-600 tajawal-regular">{detail}</p>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="text-blue-600 tajawal-regular">{item.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-3xl font-bold text-blue-800 mb-6 tajawal-bold">أرسل رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-blue-800 mb-2 tajawal-medium">الاسم الكامل</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 tajawal-regular"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-blue-800 mb-2 tajawal-medium">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 tajawal-regular"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-blue-800 mb-2 tajawal-medium">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 tajawal-regular"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-blue-800 mb-2 tajawal-medium">الرسالة</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 tajawal-regular"
                    placeholder="أدخل رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-300 text-lg tajawal-bold"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
      </div>
    </section>
  );
}