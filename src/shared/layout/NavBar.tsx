import React, { useEffect } from "react";
import logo from "@/assets/logos/logo-with-text.svg";
import iconHome from "@/assets/icons/home.svg";
import iconBook from "@/assets/icons/book.svg";
import iconPen from "@/assets/icons/pen.svg";
import iconStar from "@/assets/icons/star.svg";
import iconGlobe from "@/assets/icons/globe.svg";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Trang chủ", icon: iconHome, href: "/", hasDropdown: false },
  {
    name: "Bài học",
    icon: iconBook,
    href: "/courses",
    hasDropdown: true,
    dropDownItems: [
      { name: "Cấp độ 1: Sơ cấp" },
      { name: "Cấp độ 2: Trung cấp" },
      { name: "Cấp độ 3: Cao cấp" },
    ],
  },
  {
    name: "Cơ bản",
    icon: iconPen,
    href: "/basic",
    hasDropdown: true,
    dropDownItems: [
      { name: "Bảng chữ cái" },
      { name: "Từ vựng" },
      { name: "Ngữ pháp" },
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
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0  w-full flex justify-center items-center bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`w-[90vw] py-2 rounded-md flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="hover:cursor-pointer w-[150px] rounded-md">
          <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
        </div>
        {/* Menu */}
        <ul className="flex justify-center items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex justify-center items-center gap-1 hover:cursor-pointer"
              >
                <img src={item.icon} alt="" className="w-[20px] h-[20px]" />
                <p className="text-sm font-semibold">{item.name}</p>
                {item.hasDropdown && item?.dropDownItems.length > 0 && (
                  <>
                    <MdArrowDropDown />
                    <ul className="absolute mt-8 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100">
                      {item.dropDownItems!.map((subItem) => (
                        <li
                          className="px-4 py-2 hover:bg-gray-100"
                          key={subItem.name}
                        >
                          {subItem.name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Link>
            </li>
          ))}
          <li className="flex justify-center items-center gap-1 mx-4 hover:cursor-pointer">
            <img src={iconGlobe} alt="" className="w-[26px] h-[26px]" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
