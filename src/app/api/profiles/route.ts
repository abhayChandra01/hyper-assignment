import { NextResponse } from "next/server";

const profiles = [
  {
    name: "Abhishek Gupta",
    category: "2y+",
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리"],
  },
  {
    name: "Jay",
    category: "3y+",
    skills: ["웹 개발", "UI/UX 디자인", "SEO 최적화", "프로젝트 관리"],
  },
  {
    name: "Emily",
    category: "4y+",
    skills: ["웹 개발", "UI/UX 디자인", "SEO 최적화", "프로젝트 관리"],
  },
  {
    name: "Carlos",
    category: "5y+",
    skills: ["웹 개발", "UI/UX 디자인", "프로젝트 관리"],
  },
  {
    name: "Anika",
    category: "2y+",
    skills: [
      "웹 개발",
      "UI/UX 디자인",
      "SEO 최적화",
      "프로젝트 관리",
      "최적화",
    ],
  },
];

export async function GET() {
  return NextResponse.json(profiles);
}
