import { useState, useEffect } from 'react';

export default function About() {
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

    const aboutElement = document.getElementById('about');
    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  const stats = [
    { number: "500+", label: "عميل راضي" },
    { number: "1000+", label: "شحنة ناجحة" },
    { number: "25+", label: "دولة حول العالم" },
    { number: "98%", label: "معدل الرضا" }
  ];

  const features = [
    {
      icon: "⏰",
      title: "تسليم سريع",
      description: "نضمن تسليم شحناتك في الوقت المحدد دون أي تأخير"
    },
    {
      icon: "🛡️",
      title: "أمان كامل",
      description: "شحناتك مؤمنة بالكامل خلال رحلتها من البداية إلى النهاية"
    },
    {
      icon: "📱",
      title: "تتبع مباشر",
      description: "تتبع شحنتك مباشرة عبر تطبيقنا أو موقعنا الإلكتروني"
    },
    {
      icon: "👨‍💼",
      title: "دعم متخصص",
      description: "فريق دعم متاح 24/7 لمساعدتك في أي استفسار"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Main Image - Shipping Warehouse */}
              <img 
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="مستودعات EgyBest للشحن" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Top Left Image - Shipping Containers */}
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXBwaW5nfGVufDB8fDB8fHww" 
                alt="حاويات شحن EgyBest" 
                className="absolute -top-6 -left-6 w-24 h-24 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
              
              {/* Bottom Right Image - Cargo Plane */}
              <img 
                src="https://media.istockphoto.com/id/2059210142/photo/a-post-office-worker-is-using-tablet-and-headset-for-tracking-shipment-while-smiling-at-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTavywDS7iaQdv81L2xkEutFcytphJBYIRimrZSLLkU=" 
                alt="طائرة شحن EgyBest" 
                className="absolute -bottom-6 -right-6 w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 tajawal-bold">
              من نحن
            </h2>
            <p className="text-xl text-blue-600 mb-6 leading-relaxed tajawal-regular">
              <span className="text-blue-800 font-bold">EgyBest</span> هي شركة شحن رائدة في مصر، 
              نقدم حلول شحن متكاملة ومبتكرة منذ عام 2010. نحن نفتخر بتقديم خدمات شحن عالية الجودة 
              تلبي احتياجات عملائنا في جميع أنحاء العالم.
            </p>
            <p className="text-lg text-blue-600 mb-8 leading-relaxed tajawal-regular">
              برؤيتنا الواضحة وتركيزنا على التميز، استطعنا بناء سمعة طيبة كواحد من أفضل مقدمي 
              خدمات الشحن في المنطقة، مع التزامنا الدائم بالجودة والموثوقية والابتكار.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md border border-blue-100">
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-blue-600 tajawal-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg tajawal-bold">
              اكتشف المزيد عنا
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12 text-center tajawal-bold">
            لماذا تختار ايجي بيست ؟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 text-center">
                <div className="text-4xl mb-4 text-blue-600">{feature.icon}</div>
                <h4 className="text-xl font-bold text-blue-800 mb-3 tajawal-bold">{feature.title}</h4>
                <p className="text-blue-600 tajawal-regular">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}