import React, { ReactNode } from "react";
import HeaderPage from "@/components/header.component";
import FooterPage from "@/components/footer.component";
import Head from "next/head";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="kI4jOP2_e_FRUWqoxsX_-zLexifelXHisFcN4Qehh6U" />
      </Head>
      <div className="font-poppins">
        <HeaderPage />
        <div className="min-h-screen my-10 text-white px-3 lg:px-20 xl:px-40  2xl:px-72">
          {children}
        </div>
        <FooterPage />
      </div>
    </>
  );
};

export default PageContainer;
