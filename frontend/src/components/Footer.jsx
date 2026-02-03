const Footer = () => {
  return (
    <footer className="bg-[#0B1C2D] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold">VoyageX</h3>
          <p className="text-gray-300 mt-2">
            Explore places. Plan trips. Create unforgettable memories.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/search" className="hover:text-white">Explore</a></li>
            <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-3">Connect with Us</h4>
          <p className="text-gray-300">contact@voyagex.com</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} VoyageX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
