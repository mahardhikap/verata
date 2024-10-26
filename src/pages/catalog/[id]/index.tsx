import React from "react";
import PageContainer from "@/containers/page.container";
import { CatalogDummy } from "@/data/menu.data";
import { useRouter } from "next/router";
import Image from "next/image";

const DetailCatalog: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterData = CatalogDummy[Number(id)];
  const handleOrderClick = (name: string) => {
    const message = `Halo admin, saya mau pesan ${name}. Yang tertera di https://verata.vercel.app/catalog/${id}`;
    const whatsappUrl = `https://wa.me/+6287878780251?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <PageContainer>
      {filterData && filterData?.image?.length > 0 ? (
        <div className="relative">
          <Image
            src={filterData?.image[0]}
            width={350}
            height={350}
            alt="catalog-item"
            className="object-cover h-full w-full aspect-video border border-premium"
          />
          {!filterData?.stock && (
            <div className="p-3 w-fit font-semibold text-lg rounded-2xl absolute bg-gray-800 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              STOCK OUT
            </div>
          )}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center aspect-video bg-[#e0e0e0] border border-premium">
          <div className="text-gray-500 text-center">No Image Available</div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <div className="col-span-1">
          <div
            className={`${
              filterData?.disc > 0 ? "flex" : "hidden"
            } items-center gap-2`}
          >
            <div
              className={`${
                filterData?.disc > 0 ? "line-through" : ""
              } text-base`}
            >
              Rp. {filterData?.price}
            </div>
            <div className="bg-red-400 px-2 py-1 text-xs rounded-xl font-semibold">
              Disc {((filterData?.disc / filterData?.price) * 100).toFixed(0)}%
            </div>
          </div>
          <div className="font-bold text-2xl">
            Rp. {filterData?.price - filterData?.disc}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex items-center justify-center md:justify-end">
          <div
            className="font-bold px-3 py-2 rounded-2xl bg-premium w-10/12 md:w-1/2 lg:w-1/3 cursor-pointer text-center transform scale-100 hover:scale-110 transition-transform duration-300"
            onClick={() => handleOrderClick(filterData?.product)}
          >
            CHECKOUT
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="font-semibold text-xl text-premium">
            {filterData?.product}
          </div>
          <div className="text-sm mt-5 text-justify">{filterData?.desc}</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailCatalog;
