import { Link, NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/GreenNest Logo.webp";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };
  const linkBase =
    "relative transition duration-300 hover:text-green-700 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-green-700 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";
  const activeLink =
    "text-green-700 font-semibold after:w-full after:bg-green-700";
  const navLinks = (
    <>
      <li data-aos="fade-down" data-aos-delay="150">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "text-gray-700"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li data-aos="fade-down" data-aos-delay="300">
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "text-gray-700"}`
          }
        >
          Plants
        </NavLink>
      </li>
      <li data-aos="fade-down" data-aos-delay="450">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : "text-gray-700"}`
          }
        >
          My Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white/90 backdrop-blur shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2"data-aos="fade-down">
          <img src={logo} alt="GreenNest" className="w-10 h-10 rounded-full" />
          <span className="font-bold text-2xl text-green-700 tracking-wide">
            GreenNest
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks}
        </ul>

        {/* Auth section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors hidden md:inline-block"data-aos="fade-down" data-aos-delay="600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 border border-green-600 text-green-700 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors hidden md:inline-block"data-aos="fade-down" data-aos-delay="800"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="flex items-center">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-green-600 object-cover cursor-pointer"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold uppercase cursor-pointer">
                    {user.displayName
                      ? user.displayName.slice(0, 2)
                      : user.email?.slice(0, 2)}
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-lg w-48"
              >
                <li className="text-green-700 font-medium px-2 py-1">
                  {user.displayName || "My Profile"}
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="hover:bg-green-50 text-gray-700 rounded-md px-2 py-1"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:bg-red-50 rounded-md px-2 py-1 text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-green-700">
            ☰
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-3 shadow bg-white rounded-box w-44 space-y-2">
              {navLinks}
              {!user && (
                <>
                <li>
                  <Link to="/login" className="text-green-700 font-medium hover:underline">
            Login
            </Link>
            </li>
            <li>
              <Link to="/signup" className="text-green-700 font-medium hover:underline">Register
              </Link>
              </li>
              </>
            )}
            </ul>
            </div>
      </div>
    </nav>
  );
};

export default Navbar;