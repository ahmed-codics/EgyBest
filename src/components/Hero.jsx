import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonHover = (e) => {
    // Create ripple effect on button hover
    const button = e.target;
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
    // Different actions based on button click
    if (action === 'start') {
      // Simulate starting shipping process
      const shippingAnimation = document.querySelector('.shipping-animation');
      shippingAnimation.style.display = 'block';
      setTimeout(() => {
        shippingAnimation.style.display = 'none';
      }, 2000);
    } else if (action === 'contact') {
      // Direct phone call - using the first number from your list
      window.location.href = 'tel:01111458668';
    }
  };

  return (
    <section id='hero' className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-700 to-blue-400 text-white text-center px-6 overflow-hidden relative">
      
      {/* Subtle static background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Main Title with animation */}
      <h1 className={`text-8xl md:text-9xl mb-6 permanent-marker-regular leading-tight transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        EgyBest
        <span className="absolute -inset-4 rounded-lg bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
      </h1>

      {/* Subtitle with staggered animation */}
      <p className={`text-3xl md:text-4xl tajawal-bold mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        أفضل مكتب شحن في مصر
      </p>

      {/* Longer descriptive line */}
      <p className={`text-xl md:text-2xl tajawal-regular max-w-3xl leading-relaxed mb-10 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        نوصلك في أي مكان بسرعة وأمان. مع خبرتنا الواسعة وخدماتنا المتنوعة،
        نضمن لك أفضل تجربة شحن داخل وخارج مصر بأعلى معايير الجودة والالتزام.
      </p>

      {/* Buttons with hover effects */}
      <div className={`flex flex-col md:flex-row gap-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button 
          className="px-10 py-4 bg-white text-blue-700 tajawal-bold rounded-full text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden relative"
          onMouseOver={handleButtonHover}
          onClick={() => handleButtonClick('contact')}
        >
          ابدأ الشحن الآن
        </button>
        <button 
          className="px-10 py-4 bg-transparent border-2 border-white text-white tajawal-bold rounded-full text-xl shadow-lg hover:bg-white hover:text-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden relative"
          onMouseOver={handleButtonHover}
          onClick={() => handleButtonClick('contact')}
        >
          اتصل بنا
        </button>
      </div>
      
      {/* Shipping animation (hidden by default) */}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          transform: scale(0);
          animation: ripple 0.6s linear;
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