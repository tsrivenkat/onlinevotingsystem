"use client";

import { useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { Menu, X, Sun, Moon, LogOut } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navigation = useMemo(() => {
    return isAuthenticated
      ? [
          { name: "Dashboard", href: "/dashboard" },
          { name: "Results", href: "/results" },
          { name: "Settings", href: "/settings" },
          { name: "Help", href: "/help" },
        ]
      : [];
  }, [isAuthenticated]);

  const NavLink = ({ item }) => (
    <Link
      to={item.href}
      className={`${
        location.pathname === item.href
          ? "text-purple-600 dark:text-purple-400"
          : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
      } px-3 py-2 text-sm font-medium transition-colors duration-200`}
    >
      {item.name}
    </Link>
  );

  const AuthButtons = () =>
    isAuthenticated ? (
      <button
        onClick={handleLogout}
        className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Log out
      </button>
    ) : (
      <div className="hidden md:flex space-x-2">
        <Link
          to="/login"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors duration-200"
        >
          Register
        </Link>
      </div>
    );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to={isAuthenticated ? "/dashboard" : "/"}
            className="flex items-center"
          >
            <img
              src="/logo.png"
              alt="VotePlateau Logo"
              className="h-20 w-30"
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              VotePlateau
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle dark mode"
              aria-pressed={darkMode}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <AuthButtons />

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1 transition-all">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? "bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Log out
                </button>
              ) : (
                <div className="flex flex-col space-y-2 px-3">
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
