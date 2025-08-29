import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      observer.observe(servicesElement);
    }

    return () => {
      if (servicesElement) {
        observer.unobserve(servicesElement);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "الشحن الدولي",
      description: "خدمة شحن دولية سريعة وآمنة إلى جميع أنحاء العالم بأسعار تنافسية وموثوقية عالية.",
      icon: "🌍"
    },
    {
      id: 2,
      title: "الشحن السريع",
      description: "خدمة الشحن السريع للمستعجلين مع خيارات توصيل في نفس اليوم أو خلال 24 ساعة.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "الشحن الجوي",
      description: "خدمة شحن جوي سريعة وآمنة للبضائع ذات الأولوية مع تتبع دقيق خلال الرحلة.",
      icon: "✈️"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-blue-800 mb-6 tajawal-bold transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            خدماتنا
          </h2>
          <p className={`text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed tajawal-regular transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            نقدم مجموعة متكاملة من خدمات الشحن التي تلبي جميع احتياجاتك بدءاً من الشحن المحلي وحتى الدولي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-blue-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className="text-5xl mb-6 text-center text-blue-600">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center tajawal-bold">
                {service.title}
              </h3>
              
              {/* Service Description */}
              <p className="text-blue-600 leading-relaxed text-center tajawal-regular">
                {service.description}
              </p>
              
              {/* Learn More Button */}
              <div className="text-center mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 tajawal-medium">
                  اعرف المزيد
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 tajawal-bold">
            هل تحتاج إلى خدمة شحن مخصصة؟
          </h3>
          <p className="text-xl text-blue-600 mb-8 max-w-2xl mx-auto tajawal-regular">
            فريقنا مستعد لمساعدتك في تصميم حل شحن يناسب احتياجاتك الخاصة
          </p>
<button 
  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg tajawal-bold"
  onClick={() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
>
  احصل على استشارة مجانية
</button>
        </div>
      </div>
    </section>
  );
}