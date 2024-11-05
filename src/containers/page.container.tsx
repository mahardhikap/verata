import React, { ReactNode } from "react";
import HeaderPage from "@/components/header.component";
import FooterPage from "@/components/footer.component";
import Head from "next/head";
import { useRouter } from "next/router";

interface PageContainerProps {
  children: ReactNode;
}

// px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28  2xl:px-40

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  const router = useRouter()
  const canonicalUrl = `https://verata.vercel.app${router.asPath}`;
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="kI4jOP2_e_FRUWqoxsX_-zLexifelXHisFcN4Qehh6U"
        />
        <meta
          name="Verata Wallpaper dan Interior Jogja"
          content="Verata Wallpaper dan Interior Jogja adalah penyedia kebutuhan wallpaper dan interior Anda."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/verata_fav_icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="font-poppins">
        <HeaderPage />
        <div className="min-h-screen text-white">{children}</div>
        <FooterPage />
      </div>
    </>
  );
};

export default PageContainer;
