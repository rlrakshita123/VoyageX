const Hero = () => {
  return (
    <section className="w-full bg-[#020617] text-white">
      <div className="relative h-screen flex items-center justify-center px-6">
        <img
          src="/images/heroBG.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Explore the World <br />
            <span className="text-blue-400">Your Way</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Discover breathtaking places, customize your travel plans,
            and create unforgettable journeys — all in one place.
          </p>

          <a
            href="/search"
            className="inline-block mt-10 bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
          >
            Book Now
          </a>
        </div>
      </div>

     
      <div className="py-24 bg-[#020617]">
        <h2 className="text-3xl font-bold px-8 mb-8">
          Inspiration for Your Next Trip
        </h2>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-scroll-x pause-on-hover px-8">
            {[
              { img: "/images/card1.jpg", title: "Sky Adventures" },
              { img: "/images/card2.jpg", title: "Peaceful Waters" },
              { img: "/images/card3.jpg", title: "Cultural Evenings" },
              { img: "/images/card4.jpg", title: "Festival Nights" },
              { img: "/images/card5.jpg", title: "Nature Escapes" },

             
              { img: "/images/card1.jpg", title: "Sky Adventures" },
              { img: "/images/card2.jpg", title: "Peaceful Waters" },
              { img: "/images/card3.jpg", title: "Cultural Evenings" },
              { img: "/images/card4.jpg", title: "Festival Nights" },
              { img: "/images/card5.jpg", title: "Nature Escapes" },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[380px] relative rounded-2xl overflow-hidden shadow-xl group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

               
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Explore experiences
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
