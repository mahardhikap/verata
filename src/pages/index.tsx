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
        <div className="flex flex-col justify-center items-center order-2 md:order-1">
          <div className="text-3xl xl:text-4xl text-premium w-full font-normal font-philosopher">
            Keindahan Interior dan Eksterior Premium Dimulai di Sini.
          </div>
          <div className="text-justify text-base sm:text-lg text-premium mt-5">
            <strong>Verata Wallpaper Jogja</strong> adalah penyedia kebutuhan
            interior dan eksterior Anda. Kami menawarkan koleksi wallpaper impor
            ready stock terlengkap untuk memperindah ruang Anda. Alamat kami di
            Jalan Magelang km 8.5, Sendangadi, Mlati, Sleman, Indonesia, di
            Daerah Istimewa Yogyakarta.
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2 lg:justify-end items-center">
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
        <div className="font-normal text-2xl text-premium text-center my-10 font-philosopher">
          Catalog
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
        <div
          className="col-span-2 lg:col-span-3 text-center font-normal text-2xl text-premium cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300 my-10 font-philosopher"
          onClick={() => router.push("/catalog")}
        >
          More Products?
        </div>
      </div>
    </PageContainer>
  );
}
