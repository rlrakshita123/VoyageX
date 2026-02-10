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

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#020617] text-white overflow-hidden">

      <div className="w-full overflow-hidden py-10">
        <div className="flex gap-24 w-max animate-scroll-x text-4xl font-medium text-white/20 px-8">
          {[
            "Explore",
            "Choose",
            "Customize",
            "Book",
            "Travel",
            "Enjoy",
            "Explore",
            "Choose",
            "Customize",
            "Book",
            "Travel",
            "Enjoy",
          ].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="relative min-h-[75vh] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
              Simple. Fast. Secure.
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              How VoyageX <br /> Works
            </h2>

            <div className="space-y-6">
              {[
                "Explore destinations across mountains, beaches & cities",
                "Choose a trip that fits your style and budget",
                "Customize your preferences with ease",
                "Book securely with instant confirmation",
                "Travel stress-free and enjoy the journey",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group"
                >
                  <span className="text-blue-400 font-semibold text-lg group-hover:scale-110 transition">
                    0{index + 1}
                  </span>
                  <p className="text-gray-300 group-hover:text-white transition">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

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

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
