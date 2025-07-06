import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaRegCalendarCheck,
  FaDonate,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaMosque } from "react-icons/fa";
import logo from "../assets/logo.jpeg"; // Adjust the path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#prayer", label: "Prayer Times", icon: <FaMosque /> },
    { href: "#events", label: "Events", icon: <FaRegCalendarCheck /> },
    { href: "#calendar", label: "Calendar", icon: <FaCalendarAlt /> },
    { href: "#donate", label: "Donate", icon: <FaDonate /> },
    { href: "#contact", label: "Contact", icon: <FaPhone /> },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-base sm:text-xl font-bold text-green-800">
            Al Falah
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-green-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm sm:text-base font-medium text-green-900">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex items-center gap-2 hover:bg-green-100 hover:text-green-700 transition-colors duration-200 transition transform duration-150 active:scale-95">
                <span className="text-green-600">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-green-900 font-medium hover:bg-green-100 hover:text-green-700 transition-colors duration-200 transition transform duration-150 active:scale-95">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 hover:text-green-600\"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-green-600">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
