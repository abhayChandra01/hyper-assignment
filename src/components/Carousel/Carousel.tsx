"use client";
import React from "react";
import { motion } from "framer-motion";
import avatarImage from "@/assets/Ellipse 12.png";
import Image from "next/image";
import { BsCurrencyDollar } from "react-icons/bs";

type Profile = {
  name: string;
  category: string;
  skills: string[];
};

const Card: React.FC<{
  backgroundCard: boolean;
  profile: {
    name: string;
    category: string;
    skills: string[];
  };
}> = ({ profile, backgroundCard }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg p-6 shadow-xl flex flex-col items-center justify-evenly relative group ${
        backgroundCard
          ? `h-[308px] w-[201px] xl:h-[366px] xl:w-[259px] mt-5 bg-[#EDFCFF] mx-8 md:mx-0`
          : `h-[350px] w-[234px] xl:h-[408px] xl:w-[292px] bg-white`
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!backgroundCard && (
        <div className="absolute inline-flex items-center -top-16 w-fit max-w-[180px] bg-white text-sm p-3 rounded-[8px] shadow-lg font-[900] text-[#40E2E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#BBF3D2]">
            <BsCurrencyDollar color="#00C696" />
          </div>
          월 100만원
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
        </div>
      )}

      <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center">
        <Image
          src={avatarImage}
          alt={`${profile.name}'s avatar`}
          width={128}
          height={128}
        />
      </div>
      <h2 className="text-[20px] xl:text-[24px] font-[900] text-[#24252F]">
        {profile.name}
      </h2>
      <h3 className="text-[12px] xl:text-[16px] font-[900] text-[#4A77FF]">
        마케팅 · {profile.category}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {profile.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs xl:text-sm px-1 xl:px-3 py-1 border border-[#C1C5CF] rounded-[6px] text-[#5E626F]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Carousel: React.FC<{ profiles: Profile[] }> = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isSliding, setIsSliding] = React.useState(false);

  const nextProfile = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    setTimeout(() => setIsSliding(false), 300);
  };

  const prevProfile = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsSliding(false), 300);
  };

  const prevIndex = currentIndex === 0 ? profiles.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % profiles.length;

  return (
    <div className="flex justify-center items-center relative w-full mt-10 max-w-lg mx-auto">
      <div className="relative w-full h-full">
        <div className="absolute z-[5] top-0 left-0">
          <Card profile={profiles[prevIndex]} backgroundCard={true} />
        </div>

        <div className="absolute z-[5] top-0 right-0">
          <Card profile={profiles[nextIndex]} backgroundCard={true} />
        </div>

        <motion.div
          key={currentIndex}
          className="absolute z-50 w-full transition-transform duration-300 flex justify-center"
          initial={{ x: isSliding ? 100 : 0 }}
          animate={{ x: 0 }}
          exit={{ x: isSliding ? -100 : 0 }}
        >
          <Card profile={profiles[currentIndex]} backgroundCard={false} />
        </motion.div>

        <div className="flex justify-between absolute w-full z-[100] top-[150px] xl:top-[190px]">
          <button
            onClick={prevProfile}
            className="p-2 text-[40px] -ml-1 md:-ml-10"
          >
            {`<`}
          </button>
          <button
            onClick={nextProfile}
            className="p-2 text-[40px] -ml-1 md:-mr-10"
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
