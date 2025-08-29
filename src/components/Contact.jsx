import { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("شكراً لتواصلكم معنا! سنرد عليكم في أقرب وقت.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const phoneNumbers = [
    "01111458668", "01223536536", "01021521243",
    "01103031902", "01274075000", "01111458668", "01226891891"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "أرقام الهاتف",
      details: phoneNumbers
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "العنوان",
      details: ["القاهرة , المعادي"]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "البريد الإلكتروني",
      details: ["info@egybest-shipping.com"]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
                  <div>{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-3 tajawal-bold">{item.title}</h4>
                    <div className="space-y-2">
                      {Array.isArray(item.details) ? (
                        item.details.map((detail, i) => (
                          <div key={i}>
                            {item.title === "أرقام الهاتف" ? (
                              <a href={`tel:${detail}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 tajawal-regular hover:underline">
                                {detail}
                              </a>
                            ) : item.title === "البريد الإلكتروني" ? (
                              <a href={`mailto:${detail}`} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 tajawal-regular hover:underline">
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
            <div className="mt-8 flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                <Facebook size={28} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors">
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-3xl font-bold text-blue-800 mb-6 tajawal-bold">أرسل رسالة</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="الاسم الكامل"
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 tajawal-regular"/>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 tajawal-regular"/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 tajawal-regular"/>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" placeholder="أدخل رسالتك هنا..."
                  className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 tajawal-regular"></textarea>
                
                <button type="submit" className="w-full px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-lg tajawal-bold">
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
