import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonHover = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const handleButtonClick = (action) => {
    if (action === "start") {
      const shippingAnimation = document.querySelector(".shipping-animation");
      if (shippingAnimation) {
        shippingAnimation.style.display = "block";
        setTimeout(() => {
          shippingAnimation.style.display = "none";
        }, 2000);
      }
    } else if (action === "contact") {
      window.location.href = "tel:01111458668";
    }
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-700 to-blue-400 text-white text-center px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title (Permanent Marker font restored) */}
      <h1
        className={`permanent-marker-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight relative z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        EgyBest
      </h1>

      {/* Subtitle (Tajawal Bold) */}
      <p
        className={`tajawal-bold text-xl sm:text-2xl md:text-3xl mb-4 transform transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        أفضل شركة شحن دولي في مصر
      </p>

      {/* Description (Tajawal Regular) */}
      <p
        className={`tajawal-regular text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 transform transition-all duration-1000 delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        نوصلك في أي مكان بسرعة وأمان. مع خبرتنا الواسعة وخدماتنا المتنوعة،
        نضمن لك أفضل تجربة شحن داخل وخارج مصر بأعلى معايير الجودة والالتزام.
      </p>

      {/* Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transform transition-all duration-1000 delay-600 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <button
          className="relative px-8 py-3 sm:px-10 sm:py-4 bg-white text-blue-700 tajawal-bold rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          onMouseOver={handleButtonHover}
          onClick={() => handleButtonClick("start")}
        >
          ابدأ الشحن الآن
        </button>
        <button
          className="relative px-8 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-white text-white tajawal-bold rounded-full text-lg sm:text-xl shadow-lg hover:bg-white hover:text-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
          onMouseOver={handleButtonHover}
          onClick={() => handleButtonClick("contact")}
        >
          اتصل بنا
        </button>
      </div>

      {/* Ripple effect CSS */}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
