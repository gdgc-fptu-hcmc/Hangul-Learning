import React from "react";
import logo from "@/assets/logos/logo-with-text.svg";
import iconHome from "@/assets/icons/home.svg";
import iconBook from "@/assets/icons/book.svg";
import iconPen from "@/assets/icons/pen.svg";
import iconStar from "@/assets/icons/star.svg";
import iconGlobe from "@/assets/icons/globe.svg";
import { MdArrowDropDown } from "react-icons/md";

const menuItems = [
  { name: "Trang chủ", icon: iconHome, href: "/", hasDropdown: false },
  {
    name: "Bài học",
    icon: iconBook,
    href: "/bai-hoc",
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
    hasDropdown: true,
    dropDownItems: [
      { name: "Bảng chữ cái" },
      { name: "Từ vựng" },
      { name: "Ngữ pháp" },
    ],
  },
  { name: "Kỳ thi TOPIK", icon: iconStar, hasDropdown: false },
];

const NavBar = () => {
  const baseImgStyle = "w-[24px] h-[24px] object-contain";
  return (
    <div className="p-2 m-1 rounded-md flex items-center border-xl border-gray-500">
      {/* Logo */}
      <div className="hover:cursor-pointer w-[150px]">
        <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
      </div>
      {/* Menu */}
      <ul className="flex justify-center items-center">
        {menuItems.map((item) => (
          <li
            className="group flex justify-center items-center gap-1 mx-4 hover:cursor-pointer"
            key={item.name}
          >
            <img src={item.icon} alt="" className={baseImgStyle} />
            <p className="text-sm font-semibold">{item.name}</p>
            {item.hasDropdown &&
              item?.dropDownItems.length > 0 && <MdArrowDropDown /> && (
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
              )}
          </li>
        ))}
        <li className="flex justify-center items-center gap-1 mx-4 hover:cursor-pointer">
          <img src={iconGlobe} alt="" className={baseImgStyle} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
