import React from "react";
import { GetServerSideProps } from "next";

const PageMap = () => {
  return null; // No need to render anything in the component itself
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
          xmlns:image="http://www.google.com/schemas/sitemap-image">
    
    <url>
        <loc>https://verata.vercel.app/</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
        <image:image>
            <image:loc>https://verata.vercel.app/images/home.jpg</image:loc>
        </image:image>
    </url>
    
    <url>
        <loc>https://verata.vercel.app/catalog/1</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
        <image:image>
            <image:loc>https://verata.vercel.app/images/product1.jpg</image:loc>
        </image:image>
    </url>
    
    <url>
        <loc>https://verata.vercel.app/catalog/2</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
        <image:image>
            <image:loc>https://verata.vercel.app/images/product2.jpg</image:loc>
        </image:image>
    </url>
    
    <url>
        <loc>https://verata.vercel.app/about</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
        <image:image>
            <image:loc>https://verata.vercel.app/images/about.jpg</image:loc>
        </image:image>
    </url>

  </urlset>`;

  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default PageMap;
