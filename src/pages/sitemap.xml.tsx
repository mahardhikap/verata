import { GetServerSideProps } from "next";
import { HeaderMenu } from "@/data/menu.data";
import { listProductFilter } from "@/api/catalog.api";
import { ProductI } from "@/interfaces/catalog-card.interface";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  const params = {
    limit: 10,
    page: 1,
    search: "",
    searchby: "product",
    sortby: "created_at",
    sort: "DESC",
  };

  let products: ProductI[] = [];
  try {
    const response = await listProductFilter(params);
    products = Array.isArray(response?.data?.list) ? response.data.list : [];
  } catch (error: any) {
    console.error("Error fetching products:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
    ${HeaderMenu.map(
      (item) => `
      <url>
        <loc>https://verata.vercel.app${item.url_menu}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`
    ).join("")}
    
    ${products.map(
      (product) => `
      <url>
        <loc>https://verata.vercel.app/catalog/${product.id}</loc>
        <lastmod>${new Date(product.created_at).toISOString()}</lastmod>
        ${product.image?.map(img => `
          <image:image>
            <image:loc>${img}</image:loc>
          </image:image>`).join("")}
      </url>`
    ).join("")}
  </urlset>`;

  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
