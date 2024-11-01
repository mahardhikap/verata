import React, { ReactNode } from "react";
import HeaderPage from "@/components/header.component";
import FooterPage from "@/components/footer.component";
import Head from "next/head";

interface PageContainerProps {
  children: ReactNode;
}

// px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28  2xl:px-40

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="kI4jOP2_e_FRUWqoxsX_-zLexifelXHisFcN4Qehh6U" />
        <meta name="robots" content="index, follow"/>
        <link rel="icon" type="image/x-icon" href="/public/verata-icons.ico"/>
      </Head>
      <div className="font-poppins">
        <HeaderPage />
        <div className="min-h-screen text-white">
          {children}
        </div>
        <FooterPage />
      </div>
    </>
  );
};

export default PageContainer;
