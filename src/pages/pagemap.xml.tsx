import { GetServerSideProps } from "next";

const PageMap = () => {
  return null; 
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
    <url>
        <loc>https://verata.vercel.app/</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
    </url>
    
    <url>
        <loc>https://verata.vercel.app/catalog</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
    </url>
    
    <url>
        <loc>https://verata.vercel.app/about</loc>
        <lastmod>2024-11-04T12:00:00Z</lastmod>
    </url>

  </urlset>`;

  res.write(xml);
  res.end();

  return { props: {} };
};

export default PageMap;