const HowItWorks = () => {
  const steps = [
    "Explore Destinations",
    "Choose Your Trip",
    "Customize Preferences",
    "Book Securely",
    "Travel & Enjoy",
  ];

  const images = [
    "/images/float1.jpg",
    "/images/float2.jpg",
    "/images/float3.jpg",
    "/images/float4.jpg",
    "/images/float5.jpg",
    "/images/float6.jpg",
    "/images/float7.jpg",
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden text-white">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        How VoyageX Works
      </h2>

      {/* Scrolling Words */}
      <div className="w-full overflow-hidden mb-24">
        <div className="flex w-max gap-16 text-3xl md:text-4xl font-semibold animate-text-scroll">
          {[...steps, ...steps].map((step, i) => (
            <span key={i} className="text-blue-400">
              {step} ✦
            </span>
          ))}
        </div>
      </div>

      {/* Image Loop */}
      <div className="relative h-[420px] flex items-center justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="How it works visual"
            className="absolute w-[280px] h-[380px] object-cover rounded-2xl shadow-2xl opacity-0"
            style={{
              animation: `pop-loop 16s infinite`,
              animationDelay: `${index * 2}s`,
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default HowItWorks;
