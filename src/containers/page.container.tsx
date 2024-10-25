import React, { ReactNode } from "react";
import HeaderPage from "@/components/header.component";
import FooterPage from "@/components/footer.component";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="font-poppins">
      <HeaderPage/>
      <div className="min-h-screen my-10 text-white px-3 lg:px-20 xl:px-40  2xl:px-72">{children}</div>
      <FooterPage/>
    </div>
  );
};

export default PageContainer;
