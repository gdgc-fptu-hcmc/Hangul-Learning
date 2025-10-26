import React, { useState, useEffect } from "react";
import logo from "@/assets/logos/logo-with-text.svg";
import { Link } from "react-router-dom";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import iconHome from "@/assets/icons/home.svg";
import iconBook from "@/assets/icons/book.svg";
import iconPen from "@/assets/icons/pen.svg";
import iconStar from "@/assets/icons/star.svg";
import iconGlobe from "@/assets/icons/globe.svg";
import ScrollToTop from "../effects/ScrollToTop";

const menuItems = [
  { name: "Trang chủ", icon: iconHome, href: "/", hasDropdown: false },
  {
    name: "Bài học",
    icon: iconBook,
    href: "/courses",
    hasDropdown: true,
    dropDownItems: [
      { name: "Cấp độ 1: Sơ cấp", href: "/courses/level-1" },
      { name: "Cấp độ 2: Trung cấp", href: "/courses/level-2" },
      { name: "Cấp độ 3: Cao cấp", href: "/courses/level-3" },
    ],
  },
  {
    name: "Cơ bản",
    icon: iconPen,
    href: "/basic",
    hasDropdown: true,
    dropDownItems: [
      { name: "Bảng chữ cái", href: "/basic/" },
      { name: "Từ vựng", href: "/basic/" },
      { name: "Ngữ pháp", href: "/basic/" },
    ],
  },
  {
    name: "Kỳ thi TOPIK",
    icon: iconStar,
    href: "/ky-thi-topik",
    hasDropdown: false,
  },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full bg-white z-50 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-[90vw] mx-auto py-2 flex justify-between items-center">
        {/* Logo */}
        <ScrollToTop>
          <div className="w-[150px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>
        </ScrollToTop>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <MdClose className="text-3xl text-[var(--dark-pink)]" />
            ) : (
              <MdMenu className="text-3xl text-[var(--dark-pink)]" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link to={item.href} className="flex items-center gap-1">
                <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
                <span className="text-sm font-semibold">{item.name}</span>
                {item.hasDropdown && (
                  <>
                    <MdArrowDropDown />
                    <ul className="absolute top-full bg-white border w-max border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100">
                      {item.dropDownItems!.map((subItem) => (
                        <li
                          key={subItem.name}
                          className="px-5 py-2 hover:bg-gray-100 text-sm font-semibold hover:scale-95 hover:text-[var(--dark-pink)]"
                        >
                          <Link to={subItem.href}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Link>
            </li>
          ))}
          <li>
            <img src={iconGlobe} alt="" className="w-[26px] h-[26px]" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white w-full shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="flex items-center gap-2 py-2 px-2 border-b"
                >
                  <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
                  <span>{item.name}</span>
                </Link>
                {item.hasDropdown && (
                  <ul className="ml-6 flex flex-col gap-1 mt-1">
                    {item.dropDownItems!.map((subItem) => (
                      <li key={subItem.name} className="py-1">
                        <Link
                          to={subItem.href}
                          className="text-sm text-gray-600 hover:text-[var(--dark-pink)]"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
