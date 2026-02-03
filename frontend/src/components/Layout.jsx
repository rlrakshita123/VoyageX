import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1C2D]">
      
      <div className="sticky top-0 z-50 border-b border-white/10">
        <Navbar />
      </div>

      <main className="flex-1">
        {children}
      </main>
      <div className="border-t border-white/10">
        <Footer />
      </div>

    </div>
  );
};

export default Layout;
