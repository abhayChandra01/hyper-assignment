"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaUserTie,
  FaRocket,
} from "react-icons/fa";

const mockData = [
  { id: 1, icon: <FaCode size={24} />, title: "해외 마케팅" },
  { id: 2, icon: <FaPalette size={24} />, title: "퍼블리셔" },
  { id: 3, icon: <FaChartLine size={24} />, title: "캐드원(제도사)" },
  { id: 4, icon: <FaUserTie size={24} />, title: "해외 세일즈" },
  { id: 5, icon: <FaRocket size={24} />, title: "해외 세일즈" },
  { id: 6, icon: <FaPalette size={24} />, title: "해외 세일즈" },
  { id: 7, icon: <FaUserTie size={24} />, title: "해외 세일즈" },
];

const HorizontalSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mockData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[80px]">
      <motion.div
        className="absolute flex z-50"
        style={{ width: `${mockData.length * 300}px` }}
        animate={{ x: -currentIndex * 300 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {mockData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center gap-2 p-3 h-full bg-white bg-opacity-[20%] rounded-[12px] mx-2"
            style={{
              width: "300px",
            }}
          >
            <div className="w-[20%] h-[48px] flex items-center justify-center bg-white bg-opacity-[40%] rounded-[12px]">
              {item.icon}
            </div>
            <div className="w-[80%] text-[20px] font-[900] text-white leading-[36px]">
              {item.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalSlider;
