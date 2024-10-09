"use client";
import React from "react";
import { motion } from "framer-motion";

const MenuSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="absolute left-0 top-full mt-2 w-[240px] bg-white text-black p-4 rounded-lg shadow-lg text-[14px]"
    >
      <ul className="flex flex-col gap-4">
        <li className="hover:text-blue-500 transition-colors font-[700] text-[#344054]">
          채용
        </li>
        <li className="hover:text-blue-500 transition-colors font-[500] text-[#344054]">
          해외 개발자 원격 채용
        </li>
        <li className="hover:text-blue-500 transition-colors font-[500] text-[#344054]">
          외국인 원격 채용 (비개발 직군)
        </li>
        <li className="hover:text-blue-500 transition-colors font-[500] text-[#344054]">
          한국어 가능 외국인 채용
        </li>
      </ul>
    </motion.div>
  );
};

export default MenuSection;
