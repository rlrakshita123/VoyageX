import { useEffect, useState } from "react";

const HowItWorks = () => {
  const images = [
    "/images/float1.jpg",
    "/images/float2.jpg",
    "/images/float3.jpg",
    "/images/float4.jpg",
    "/images/float5.jpg",
    "/images/float6.jpg",
    "/images/float7.jpg",
  ];

  const stepsText = [
    "Explore Destinations",
    "Choose Your Trip",
    "Customize Preferences",
    "Book Securely",
    "Travel & Enjoy",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-[#020617] text-white overflow-hidden flex flex-col justify-center">

      {/* Background scrolling text */}
      <div className="absolute top-24 w-full overflow-hidden opacity-20">
        <div className="flex gap-24 w-max animate-scroll-x text-5xl font-medium">
          {[...stepsText, ...stepsText].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-semibold mb-20">
        How VoyageX Works
      </h2>

      {/* STACKED IMAGE CAROUSEL */}
      <div className="relative h-[420px] flex items-center justify-center">
        {images.map((img, index) => {
          const position = (index - active + images.length) % images.length;

          return (
            <img
              key={index}
              src={img}
              alt="Voyage step"
              className="absolute w-[260px] h-[360px] rounded-3xl object-cover shadow-2xl transition-all duration-700"
              style={{
                transform: `translateX(${position * 60}px) scale(${
                  position === 0 ? 1 : 0.85
                })`,
                opacity: position === 0 ? 1 : 0.45,
                filter: position === 0 ? "blur(0px)" : "blur(2px)",
                zIndex: images.length - position,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;



