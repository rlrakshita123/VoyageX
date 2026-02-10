const HowItWorks = () => {
  const steps = [
    { title: "Explore Destinations", img: "/images/float1.jpg" },
    { title: "Choose Your Trip", img: "/images/float2.jpg" },
    { title: "Customize Preferences", img: "/images/float3.jpg" },
    { title: "Book Securely", img: "/images/float4.jpg" },
    { title: "Travel & Enjoy", img: "/images/float5.jpg" },
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#020617] text-white overflow-hidden flex items-center">

      {/* BACKGROUND SCROLL TEXT */}
      <div className="absolute top-20 w-full overflow-hidden opacity-10">
        <div className="flex gap-20 w-max animate-scroll-x text-6xl font-bold">
          {[...steps, ...steps].map((s, i) => (
            <span key={i}>{s.title}</span>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          How VoyageX Works
        </h2>

        {/* IMAGE STACK */}
        <div className="relative h-[420px] flex items-center justify-center">
          {steps.map((step, index) => (
            <img
              key={index}
              src={step.img}
              alt={step.title}
              className="absolute w-[260px] h-[360px] object-cover rounded-3xl shadow-2xl transition-all duration-700"
              style={{
                transform: `translateX(${(index - 2) * 120}px) scale(${
                  index === 2 ? 1 : 0.85
                })`,
                opacity: index === 2 ? 1 : 0.4,
                filter: index === 2 ? "blur(0px)" : "blur(2px)",
                zIndex: index === 2 ? 10 : 1,
              }}
            />
          ))}
        </div>

        {/* STEP TEXT */}
        <p className="mt-12 text-center text-xl text-blue-400 tracking-wide">
          Explore → Choose → Customize → Book → Travel
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
