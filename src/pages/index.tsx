import PageContainer from "@/containers/page.container";
import HallVerata from "../assets/images/hall-verata.jpg";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import CatalogCard from "@/components/home/catalog-card-home.component";
import { CatalogDummy } from "@/data/menu.data";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 gap-5 container mx-auto">
        <div className="flex flex-col justify-center items-center order-2 md:order-1 w-full md:w-4/5 lg:w-2/3">
          <div className="text-xl lg:text-2xl text-premium w-full font-semibold">
            Keindahan Interior dan Eksterior Premium Dimulai di Sini.
          </div>
          <div className="text-justify text-xs lg:text-base text-premium mt-5">
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
            className="rounded-2xl border-b-2 border-e-2 border-premium"
          />
        </div>
      </div>
      {/* <div className="flex items-center justify-center my-10">
        <FaArrowCircleDown size={40} className="text-premium animate-bounce" />
      </div> */}
      <div className="container mx-auto">
        <div className="font-semibold text-lg text-premium text-center my-10">
          Catalog
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {CatalogDummy?.slice(0, 6)?.map((item, i) => {
            return (
              <CatalogCard
                item_name={item.item_name}
                key={i}
                item_photo={item.item_photo}
              />
            );
          })}
        </div>
        <div
          className="col-span-2 lg:col-span-3 text-center font-semibold text-lg text-premium cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300 my-10"
          onClick={() => router.push("/catalog")}
        >
          More Products?
        </div>
      </div>
      {/* <div className="text-center text-premium text-xl font-semibold mb-10">
        Articles
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 text-second">
        <div className="rounded-xl w-full bg-premium overflow-hidden h-52 border-2 border-second">
          <div className="grid grid-cols-2 gap-3 w-full h-full">
            <Image
              src={HallVerata}
              width={500}
              height={500}
              alt="verata-article"
              className="w-full h-full object-cover"
            />
            <div className="p-3">
              <div className="font-semibold text-base lg:text-lg">Lorem Ipsum?</div>
              <div className="break-words text-justify text-xs lg:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                repellat molestias ad cum nam amet eveniet deserunt quod
                recusandae modi numquam quam fugiat nihil, reiciendis voluptates
                quia, exercitationem architecto at!
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl w-full bg-premium overflow-hidden h-52 border-2 border-second">
          <div className="grid grid-cols-2 gap-3 w-full h-full">
            <Image
              src={HallVerata}
              width={500}
              height={500}
              alt="verata-article"
              className="w-full h-full object-cover"
            />
            <div className="p-3">
              <div className="font-semibold text-base lg:text-lg">Lorem Ipsum?</div>
              <div className="break-words text-justify text-xs lg:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                repellat molestias ad cum nam amet eveniet deserunt quod
                recusandae modi numquam quam fugiat nihil, reiciendis voluptates
                quia, exercitationem architecto at! aaaaaaaaaaaaa
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </PageContainer>
  );
}
