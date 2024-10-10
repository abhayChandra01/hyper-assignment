"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

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

  return (
    <div className="flex flex-col lg:flex-row lg:gap-10">
      <div className="w-full lg:w-[50%] flex flex-col gap-2 xl:gap-5">
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
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
          className="text-[16px] xl:text-[24px] font-[900] leading-[34px]"
        >
          법률 및 인사관리 부담없이
          <br className="hidden sm:block" /> 1주일 이내에 원격으로 채용해보세요.
        </motion.h2>

        <motion.div
          className="gap-4 justify-between max-w-[579px] hidden lg:flex"
          initial="initial"
          animate="animate"
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
    </div>
  );
};

export default AnimatedSection;
