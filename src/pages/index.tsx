import PageContainer from "@/containers/page.container";
import HallVerata from "../assets/images/hall-verata.jpg";
import Image from "next/image";
import { CatalogDummy } from "@/data/menu.data";
import { useRouter } from "next/router";
import CatalogCardPage from "@/components/catalog/catalog-card-page.component";

export default function Home() {
  const router = useRouter();
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20 container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="text-premium text-center md:text-start text-3xl xl:text-4xl w-full font-normal font-philosopher mb-5">
            KEINDAHAN INTERIOR DAN EKSTERIOR PREMIUM DIMULAI DI SINI.
          </div>
          <div className="text-premium text-center md:text-start text-base sm:text-lg">
            <strong>Verata Wallpaper Jogja</strong> adalah penyedia kebutuhan
            interior dan eksterior Anda.
          </div>
          <button className="px-3 py-2 border-2 border-premium hover:bg-premium font-semibold transform scale-100 hover:scale-110 transition-transform duration-300 mt-5">
            Selengkapnya
          </button>
        </div>
        <div className="flex justify-center lg:justify-end items-center">
          <Image
            src={HallVerata}
            alt="hall-image"
            width={1000}
            height={1000}
            className="rounded-tl-3xl rounded-br-3xl border border-premium object-cover aspect-square"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="font-normal text-2xl text-premium text-center mt-10 font-philosopher">
          CATALOG
        </div>
        <div className="text-premium text-center text-base sm:text-lg mb-5">
          Koleksi wallpaper kualitas impor.
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {CatalogDummy?.slice(0, 6)?.map((item, i) => {
            return (
              <CatalogCardPage
                item_name={item.item_name}
                key={i}
                item_photo={item.item_photo}
                item_disc={item.item_disc}
                item_price={item.item_price}
                id={i}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            className="col-span-2 lg:col-span-3 text-center text-base cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300 px-3 py-2 hover:bg-premium border-2 border-premium w-fit font-semibold"
            onClick={() => router.push("/catalog")}
          >
            Produk Lainnya
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
