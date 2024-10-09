"use client";
import React, { useState } from "react";
import Logo from "@/assets/svgs/Logo/Logo";
import ArrowIcon from "@/assets/svgs/ArrowIcon/ArrowIcon";
import MenuSection from "../Menu/MenuSection";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 text-white px-4 z-10 h-[60px] flex items-center justify-between w-full bg-transparent">
      <div className="max-w-[1536px] w-full mx-auto flex items-center justify-between">
        <Logo />
        <div className="relative hidden md:flex gap-10 items-center">
          <div
            className="flex items-center gap-2 cursor-pointer whitespace-nowrap"
            onClick={toggleMenu}
          >
            <span className="font-[900]">채용</span>
            <ArrowIcon
              className={`transform ${
                isMenuOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            />
          </div>

          {isMenuOpen && <MenuSection />}

          <div className="font-[900]">해외 개발자 활용 서비스</div>
        </div>
        <button className="custom-button hidden sm:block">문의하기</button>
      </div>
    </header>
  );
};

export default Header;
