import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main className="max-w-[1536px] mx-auto pt-[100px] px-4 sm:px-10 pb-[40px] min-h-screen h-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
