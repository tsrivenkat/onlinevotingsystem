import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:flex sm:justify-between sm:items-center">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="VotePlateau" className="h-8 w-8" />
          <span className="text-lg font-bold">VotePlateau</span>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 sm:mt-0 flex space-x-6">
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 mt-4 text-center py-4 text-sm">
        © {new Date().getFullYear()} VotePlateau. All rights reserved.
      </div>
    </footer>
  );
}
