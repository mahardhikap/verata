import React from "react";
import PageContainer from "@/containers/page.container";
import { CatalogDummy } from "@/data/menu.data";
import { useRouter } from "next/router";
import Image from "next/image";

const DetailCatalog: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const filterData = CatalogDummy[Number(id)];
  const handleOrderClick = (name:string) => {
    const message = `Halo admin, saya mau pesan ${name}. Yang tertera di https://verata.vercel.app/catalog/${id}`;
    const whatsappUrl = `https://wa.me/+62895378589386?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <PageContainer>
      {filterData && filterData?.item_photo.length > 0 ? (
        <Image
          src={filterData?.item_photo[0]}
          width={350}
          height={350}
          alt="catalog-item"
          className="object-cover h-full w-full aspect-video border border-premium"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center aspect-video bg-[#e0e0e0] border border-premium">
          <div className="text-gray-500 text-center">No Image Available</div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <div className="col-span-1">
          <div className={`${filterData?.item_disc > 0 ? 'flex' : 'hidden'} items-center gap-2`}>
            <div
              className={`${
                filterData?.item_disc > 0 ? "line-through" : ""
              } text-base`}
            >
              Rp. {filterData?.item_price}
            </div>
            <div className="bg-red-400 px-2 py-1 text-xs rounded-xl font-semibold">
              Disc{" "}
              {((filterData?.item_disc / filterData?.item_price) * 100).toFixed(
                0
              )}
              %
            </div>
          </div>
          <div className="font-bold text-2xl">
            Rp. {filterData?.item_price - filterData?.item_disc}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex items-center justify-center md:justify-end">
          <div className="font-bold px-3 py-2 rounded-2xl bg-premium w-10/12 md:w-1/2 lg:w-1/3 cursor-pointer text-center transform scale-100 hover:scale-110 transition-transform duration-300" onClick={()=>handleOrderClick(filterData?.item_name)}>
            CHECKOUT
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="font-semibold text-xl text-premium">{filterData?.item_name}</div>
          <div className="text-sm mt-5 text-justify">{filterData?.item_desc}</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DetailCatalog;
