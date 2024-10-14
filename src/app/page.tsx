import AnimatedSection from "@/components/AnimatedSection/AnimatedSection";
import Carousel from "@/components/Carousel/Carousel";
import HorizontalSlider from "@/components/HorizontalSlider/HorizontalSlider";
import React from "react";

// Fetching the profiles data via SSR
async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/profiles`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

const HomePage = async () => {
  // Fetch profiles from API via SSR
  const profiles = await getData();

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <AnimatedSection />
        <div className="w-full lg:w-[50%] min-h-[450px] sm:min-h-[500px]">
          <Carousel profiles={profiles} />
        </div>
      </div>
      <div className="hidden lg:block mt-20 xl:mt-14">
        <HorizontalSlider />
      </div>
    </div>
  );
};

export default HomePage;
