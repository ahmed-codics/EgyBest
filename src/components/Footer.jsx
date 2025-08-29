import { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const footerLinks = {
    services: [
      { name: "الشحن الدولي", href: "#services" },
      { name: "الشحن السريع", href: "#services" },
      { name: "الشحن الجوي", href: "#services" },
    ],
    company: [
      { name: "من نحن", href: "#about" },
      { name: "فريق العمل", href: "#about" },
      { name: "وظائف", href: "#careers" },
    ],
    support: [
      { name: "الأسئلة الشائعة", href: "#faq" },
      { name: "الدعم الفني", href: "#support" },
      { name: "سياسة الخصوصية", href: "#privacy" },
    ],
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-blue-800 to-blue-900 text-white"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
              EgyBest
            </h3>
            <p className="text-blue-100 mb-4 leading-relaxed tajawal-regular">
              شركة EgyBest الرائدة في خدمات الشحن والتوصيل في مصر والوطن العربي.
            </p>
            <p className="text-blue-100 mb-6 leading-relaxed tajawal-regular">
              نقدم حلول شحن مبتكرة وموثوقة تلبي جميع احتياجاتك بدءاً من الشحن
              الدولي.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-300">📞</span>
                <a
                  href="tel:+201111458668"
                  className="text-blue-100 hover:text-white transition-colors tajawal-regular"
                >
                  +20 111 145 8668
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-300">📍</span>
                <span className="text-blue-100 tajawal-regular">
                  القاهرة، مصر
                </span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 tajawal-bold border-b-2 border-blue-600 pb-2">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.replace("#", ""))}
                    className="text-blue-100 hover:text-white transition-colors duration-300 tajawal-regular block py-1 hover:translate-x-2 transform transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 tajawal-bold border-b-2 border-blue-600 pb-2">
              الشركة
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.replace("#", ""))}
                    className="text-blue-100 hover:text-white transition-colors duration-300 tajawal-regular block py-1 hover:translate-x-2 transform transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 tajawal-bold border-b-2 border-blue-600 pb-2">
              الدعم
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.replace("#", ""))}
                    className="text-blue-100 hover:text-white transition-colors duration-300 tajawal-regular block py-1 hover:translate-x-2 transform transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div
          className={`flex justify-center gap-6 mt-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <a href="#" className="hover:text-blue-300 transition-colors">
            <Facebook size={22} />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <Instagram size={22} />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <Twitter size={22} />
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm tajawal-regular">
              © {currentYear} EgyBest. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="text-blue-300 hover:text-white text-sm transition-colors duration-300 tajawal-regular"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#terms"
                className="text-blue-300 hover:text-white text-sm transition-colors duration-300 tajawal-regular"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
