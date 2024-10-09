import FooterLogo from "@/assets/svgs/Logo/FooterLogo";
import React from "react";
import { FaCheck, FaCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#FBFBFB] p-5 sm:p-10 flex flex-col gap-10 w-full mt-20">
      <div className="flex flex-col gap-4 md:flex-row justify-between w-full">
        <div className="flex flex-col gap-5">
          <FooterLogo />

          <div className="font-[900] text-[14px] text-[#343741] max-w-[250px]">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </div>

          <div className="text-[13px] font-[900] text-[#5E626F] leading-[19.5px]">
            010-0000-0000
          </div>

          <div className="text-[13px] font-[900] text-[#5E626F] leading-[19.5px]">
            aaaaa@naver.com
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-10 w-full justify-start md:justify-end">
          <div className="max-w-[140px] sm:max-w-[190px] w-full flex flex-col gap-2 bg-white p-3 rounded-[6px]">
            <div className="bg-[#EFF1F6] w-[40px] h-[40px] rounded-[6px] grid place-items-center">
              <FaCode color="#7388A9" />
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#343741] leading-[21px]">
              해외 개발자 원격 채용
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#5E626F] leading-[21px] inline-flex items-center gap-2">
              바로가기
              <div className="border border-[#5E626F] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaArrowRightLong color="#7388A9" size={10} />
              </div>
            </div>
          </div>

          <div className="max-w-[140px] sm:max-w-[190px] w-full flex flex-col gap-2 bg-white p-3 rounded-[6px]">
            <div className="bg-[#EFF1F6] w-[40px] h-[40px] rounded-[6px] grid place-items-center">
              <FaCode color="#7388A9" />
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#343741] leading-[21px]">
              해외 개발자 원격 채용
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#5E626F] leading-[21px] inline-flex items-center gap-2">
              바로가기
              <div className="border border-[#5E626F] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaArrowRightLong color="#7388A9" size={10} />
              </div>
            </div>
          </div>

          <div className="max-w-[140px] sm:max-w-[190px] w-full flex flex-col gap-2 bg-white p-3 rounded-[6px]">
            <div className="bg-[#EFF1F6] w-[40px] h-[40px] rounded-[6px] grid place-items-center">
              <FaCode color="#7388A9" />
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#343741] leading-[21px]">
              해외 개발자 원격 채용
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#5E626F] leading-[21px] inline-flex items-center gap-2">
              바로가기
              <div className="border border-[#5E626F] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaArrowRightLong color="#7388A9" size={10} />
              </div>
            </div>
          </div>

          <div className="max-w-[140px] sm:max-w-[190px] w-full flex flex-col gap-2 bg-white p-3 rounded-[6px]">
            <div className="bg-[#EFF1F6] w-[40px] h-[40px] rounded-[6px] grid place-items-center">
              <FaCode color="#7388A9" />
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#343741] leading-[21px]">
              해외 개발자 원격 채용
            </div>

            <div className="text-[12px] sm:text-[14px] font-[900] text-[#5E626F] leading-[21px] inline-flex items-center gap-2">
              바로가기
              <div className="border border-[#5E626F] w-[20px] h-[20px] rounded-[6px] grid place-items-center">
                <FaArrowRightLong color="#7388A9" size={10} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 sm:gap-10">
        <div className="flex flex-col gap-3 min-w-[200px]">
          <div className="text-[12px] leading-[18px] font-[900] text-[#343741]">
            상호명
          </div>
          <div className="text-[13px] leading-[19.5px] font-[900] text-[#5E626F]">
            하이퍼하이어
          </div>
          <div className="text-[12px] leading-[18px] font-[900] text-[#5E626F]">
            Hyperhire India Private Limited
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[100px]">
          <div className="text-[12px] leading-[18px] font-[900] text-[#343741]">
            대표 CEO
          </div>
          <div className="text-[13px] leading-[19.5px] font-[900] text-[#5E626F]">
            김주현
          </div>
          <div className="text-[12px] leading-[18px] font-[900] text-[#5E626F]">
            Juhyun Kim
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          <div className="text-[12px] leading-[18px] font-[900] text-[#343741]">
            사업자등록번호 CIN
          </div>
          <div className="text-[13px] leading-[19.5px] font-[900] text-[#5E626F]">
            427-86-01187
          </div>
          <div className="text-[12px] leading-[18px] font-[900] text-[#5E626F]">
            U74110DL2016PTC290812
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          <div className="text-[12px] leading-[18px] font-[900] text-[#343741]">
            주소 ADDRESS
          </div>
          <div className="text-[13px] leading-[19.5px] font-[900] text-[#5E626F]">
            서울특별시 강남대로 479, 지하 1층 238호
          </div>
          <div className="text-[12px] leading-[18px] font-[900] text-[#5E626F]">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
            110053 India
          </div>
        </div>
      </div>

      <div className="text-[13px] font-[900] leading-[19.5px] text-[#5E626F]">
        ⓒ 2023 Hyperhire
      </div>
    </div>
  );
}
