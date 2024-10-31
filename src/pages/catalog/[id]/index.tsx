import React from "react";
import PageContainer from "@/containers/page.container";
import { useRouter } from "next/router";
import Image from "next/image";
import { detailProduct } from "@/api/catalog.api";
import { ProductI } from "@/interfaces/catalog-card.interface";
import { toast } from "react-toastify";
import Head from "next/head";
import { truncateText } from "@/utils/truncate-text";
import Loading from "@/components/atomic/loading";

const DetailCatalog: React.FC<{ data: ProductI }> = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleOrderClick = (name: string) => {
    const message = `Halo admin, saya mau pesan ${name}. Yang tertera di https://verata.vercel.app/catalog/${data.id}`;
    const whatsappUrl = `https://wa.me/+6287878780251?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleImageSwap = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {!data ? (
        <div className="flex justify-center items-center h-screen">
          <Loading className="py-10" color="border-t-premium" />
        </div>
      ) : (
        <>
          <Head>
            <title>{truncateText(data.product, 50) || "Catalog"}</title>
            <meta
              name="description"
              content={
                truncateText(data.description, 150)?.replace(/<[^>]+>/g, "") ||
                `Produk id ${data.id}`
              }
            />
            <meta
              name="keywords"
              content="Wallpaper Kualitas Impor, Interior, Verata, Jogja, Yogyakarta, Wallpaper Yogyakarta, Wallpaper Jogja, Verata Wallpaper"
            />
            <meta
              property="og:title"
              content={truncateText(data.product, 50) || "Catalog"}
            />
            <meta
              property="og:description"
              content={
                truncateText(data.description, 150)?.replace(/<[^>]+>/g, "") ||
                `Produk id ${data.id}`
              }
            />
            <meta
              property="og:image"
              content={
                data.image[0] ||
                "https://res.cloudinary.com/dxao06apr/image/upload/v1729950357/dont%20delete%20before%20check/ssyk2vjb7yyvi5bv7sfg.jpg"
              }
            />
            <meta
              property="og:url"
              content={`https://verata.vercel.app/catalog/${data.id}`}
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={truncateText(data.product, 50) || "Catalog"}
            />
            <meta
              name="twitter:description"
              content={
                truncateText(data.description, 150)?.replace(/<[^>]+>/g, "") ||
                `Produk id ${data.id}`
              }
            />
            <meta
              name="twitter:image"
              content={
                data.image[0] ||
                "https://res.cloudinary.com/dxao06apr/image/upload/v1729950357/dont%20delete%20before%20check/ssyk2vjb7yyvi5bv7sfg.jpg"
              }
            />
          </Head>
          <PageContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-auto container px-5">
              <div className="col-span-1">
                {data.image.length > 0 ? (
                  <div className="relative">
                    <div className="flex">
                      <Image
                        src={data.image[currentImageIndex]}
                        width={1000}
                        height={1000}
                        alt="catalog-item"
                        className="object-cover w-full aspect-square border border-premium"
                      />
                    </div>
                    {!data.stock && (
                      <div className="p-3 w-fit font-semibold text-lg rounded-2xl absolute bg-gray-800 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        STOCK OUT
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center aspect-square bg-[#e0e0e0] border border-premium">
                    <div className="text-gray-500 text-center">
                      No Image Available
                    </div>
                  </div>
                )}
              </div>
              <div className="col-span-1 w-full">
                <div className="flex gap-2 mb-5">
                  {data.image.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageSwap(index)}
                      className={`w-12 h-12 overflow-hidden border-4 rounded-full ${
                        currentImageIndex === index
                          ? "border-premium"
                          : "border-white"
                      }`}
                    >
                      <Image
                        src={img}
                        width={40}
                        height={40}
                        alt={`thumbnail-${index}`}
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="font-semibold text-xl text-premium">
                  {data.product}
                </div>
                <div
                  className={`${
                    data.disc > 0 ? "flex" : "hidden"
                  } items-center gap-2 mt-5`}
                >
                  <div
                    className={`${
                      data.disc > 0 ? "line-through" : ""
                    } text-base`}
                  >
                    {data.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </div>
                  <div className="bg-red-400 px-2 w-fit py-1 text-xs rounded-xl font-semibold">
                    Disc {((data.disc / data.price) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="font-bold text-2xl my-5">
                  {(data.price - data.disc).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  })}
                </div>
                <div
                  className="text-sm break-words"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
                <div className="flex justify-center">
                  <div
                    className="font-bold w-2/3 px-3 py-2 rounded-2xl bg-gradient-to-r from-premium via-white to-second mt-10 cursor-pointer text-center transform scale-100 hover:scale-110 transition-transform duration-300"
                    onClick={() => handleOrderClick(data.product)}
                  >
                    <span className="text-main">CHECKOUT</span>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: { query: { id: string } }) {
  const { id } = context.query;
  let data;
  try {
    const response = await detailProduct(id as string);
    data = response?.data;
  } catch (error: any) {
    toast.error(error.message);
    data = null;
  }

  return {
    props: { data },
  };
}

export default DetailCatalog;
