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

  return (
    <section className="relative min-h-[85vh] bg-[#020617] text-white overflow-hidden flex flex-col justify-center">

      {/* Background scrolling text */}
      <div className="absolute top-24 w-full overflow-hidden opacity-20">
        <div className="flex gap-24 w-max animate-scroll-x text-5xl font-semibold">
          {[...stepsText, ...stepsText].map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-center text-4xl md:text-5xl font-semibold mb-16">
        How VoyageX Works
      </h2>

      {/* Moving Image Strip */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-12 animate-image-marquee px-12">

          {[...images, ...images].map((img, index) => {
            const isCenter = index % images.length === 3;

            return (
              <div
                key={index}
                className={`relative w-[260px] h-[360px] rounded-3xl overflow-hidden transition-all duration-700
                ${isCenter ? "scale-100 blur-0 opacity-100" : "scale-90 blur-sm opacity-50"}`}
              >
                <img
                  src={img}
                  alt="How it works visual"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default HowItWorks;
