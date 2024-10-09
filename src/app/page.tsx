"use client";
import Carousel from "@/components/Carousel/Carousel";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

// Fetching the mock data of profiles

async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/profiles`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const HomePage: React.FC = async () => {
  // List for a section in homepage

  const list = [
    {
      id: 1,
      title: "평균 월 120만원",
      description: "임금을 해당 국가를 기준으로 계산합니다.",
    },
    {
      id: 2,
      title: "최대 3회 인력교체",
      description: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
    },
    {
      id: 3,
      title: "평균 3일, 최대 10일",
      description: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
    },
  ];

  // Get profile data through SSR api route.

  const profiles = await getData();

  // fade up animation variable

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="w-full lg:w-[50%] flex flex-col gap-2 xl:gap-5">
            <div className="relative w-fit max-w-[150px] bg-white text-sm p-3 rounded-[8px] shadow-lg font-[900] text-[#40E2E8]">
              풀타임, 파트타임
              <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
            </div>
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              id="first_section"
              className="text-[36px] sm:text-[40px] xl:text-[48px] font-[900] leading-[62.4px]"
            >
              최고의 실력을 가진
              <br className="hidden sm:block" /> 외국인 인재를 찾고 계신가요?
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              id="second_section"
              className="text-[16px] xl:text-[24px] font-[900] leading-[34px]"
            >
              법률 및 인사관리 부담없이
              <br className="hidden sm:block" /> 1주일 이내에 원격으로
              채용해보세요.
              <br className="hidden sm:block" />
              <br className="xl:block hidden" />
              <span className="text-[10px] xl:text-[18px] underline hidden lg:block">
                개발자가 필요하신가요?
              </span>
            </motion.h2>

            <motion.div
              className="gap-4 justify-between max-w-[579px] hidden lg:flex"
              initial="initial"
              animate="animate"
              id="third_section"
            >
              {list?.map((item) => (
                <motion.div
                  key={item?.id}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5 }}
                  className="border-t border-[#fff] pt-2 max-w-[161px]"
                >
                  <p className="text-[16px] xl:text-[18px] font-[900]">
                    {item?.title}
                  </p>
                  <p className="text-[14px] xl:text-[16px] font-[900]">
                    {item?.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-full lg:w-[50%] min-h-[450px] sm:min-h-[500px]">
            <Carousel profiles={profiles} />
          </div>

          <div className="flex flex-wrap gap-2 md:hidden">
            <div className="inline-flex gap-2 min-w-[120px] font-[900]">
              <div className="bg-[#E8ECFF] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaCheck color="#2C599B" size={10} />
              </div>
              한국어 능력
            </div>
            <div className="inline-flex gap-2 min-w-[120px] font-[900]">
              <div className="bg-[#E8ECFF] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaCheck color="#2C599B" size={10} />
              </div>
              업무 수행 능력
            </div>
            <div className="inline-flex gap-2 min-w-[120px] font-[900]">
              <div className="bg-[#E8ECFF] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaCheck color="#2C599B" size={10} />
              </div>
              겸업 여부
            </div>
            <div className="inline-flex gap-2 min-w-[120px] font-[900]">
              <div className="bg-[#E8ECFF] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaCheck color="#2C599B" size={10} />
              </div>
              평판 조회
            </div>
          </div>

          <div className="underline font-[900] text-[#FBFF23] mt-5 flex md:hidden">
            개발자가 필요하신가요?
          </div>
        </div>

        <div className="hidden lg:block mt-20 xl:mt-14">
          <HorizontalSlider />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
