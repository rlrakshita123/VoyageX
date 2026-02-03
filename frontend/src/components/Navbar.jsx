import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getUser, removeToken } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = isLoggedIn();
  const user = getUser();

  const handleLogout = () => {
    removeToken();
    navigate("/login"); 
    window.location.reload(); 
  };

  return (
    <nav className="w-full bg-[#0B1C2D] text-white px-10 py-4 flex items-center justify-between">
      
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/">VoyageX</Link>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium">
        
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link to="/search" className="hover:text-blue-400 transition">
          Explore
        </Link>

        <Link to="/dashboard" className="hover:text-blue-400 transition">
          Dashboard
        </Link>

        {loggedIn ? (
          <>
            <span className="text-gray-200">
              Hi, {user.username}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Signup
            </Link>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
