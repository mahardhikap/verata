import PageContainer from "@/containers/page.container";
import HallVerata from "../assets/images/verata-hall.jpg";
import OfficeVerata from "../assets/images/verata-office.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import CatalogCardPage from "@/components/catalog/catalog-card-page.component";
import Head from "next/head";
import { FilterCatalogResI } from "@/interfaces/catalog-card.interface";
import { listProductFilter } from "@/api/catalog.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "@/components/atomic/loading";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgToolbox } from "react-icons/cg";
import { MdDeliveryDining } from "react-icons/md";
import SchemaOrg from "@/components/atomic/schema";
import { indexSchema } from "@/data/schema.data";

export default function Home() {
  const router = useRouter();
  const params = {
    limit: 10,
    page: 1,
    search: "",
    searchby: "product",
    sortby: "created_at",
    sort: "DESC",
  };
  const [products, setProducts] = useState<FilterCatalogResI | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDataProduct = async () => {
    try {
      const response = await listProductFilter(params);
      setProducts(response?.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, []);

  return (
    <>
      <Head>
        <title>Verata Wallpaper dan Interior Jogja</title>
        <meta
          name="description"
          content="Verata Wallpaper dan Interior Jogja adalah penyedia kebutuhan wallpaper dan interior Anda."
        />
        <meta
          name="keywords"
          content="Wallpaper Kualitas Impor, Interior, Verata, Jogja, Yogyakarta, Wallpaper Yogyakarta, Wallpaper Jogja, Verata Wallpaper"
        />
        <meta
          property="og:title"
          content="Verata Wallpaper dan Interior Jogja - Penyedia Wallpaper dan Interior Premium"
        />
        <meta
          property="og:description"
          content="Verata Wallpaper dan Interior Jogja adalah penyedia kebutuhan wallpaper dan interior Anda dengan koleksi produk kualitas impor."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dxao06apr/image/upload/v1729950357/dont%20delete%20before%20check/ssyk2vjb7yyvi5bv7sfg.jpg"
        />
        <meta property="og:url" content="https://verata.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Verata Wallpaper dan Interior Jogja - Penyedia Wallpaper dan Interior Premium"
        />
        <meta
          name="twitter:description"
          content="Verata Wallpaper dan Interior Jogja adalah penyedia kebutuhan wallpaper dan interior Anda dengan koleksi produk kualitas impor."
        />
        <meta name="twitter:image" content="/verata.jpg" />
      </Head>
      <SchemaOrg schema={indexSchema}/>
      <PageContainer>
        <div className="grid md:grid-cols-2 container mx-auto gap-3 p-3">
          <div className="flex flex-col justify-center items-start order-2 md:order-1 px-3 lg:px-20 bg-dark rounded-xl aspect-square">
            <h1 className="text-left text-3xl xl:text-[40px] w-full font-bold mb-5 font-philosopher bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
              WALLPAPER DAN INTERIOR PREMIUM.
            </h1>
            <p className="text-left text-sm lg:text-base bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
              <strong>Verata Wallpaper dan Interior Jogja</strong> menawarkan
              kualitas impor kebutuhan wallpaper dan interior untuk memperindah
              ruang Anda.
            </p>
            <button
              className="px-3 py-2 font-semibold transform scale-100 hover:scale-110 transition-transform duration-300 mt-10 w-fit bg-second rounded-xl"
              onClick={() => router.push("/about")}
            >
              <span className="flex items-center gap-2 bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                More <FaLongArrowAltRight className="text-white" />
              </span>
            </button>
          </div>
          <div className="relative flex justify-center lg:justify-end items-center order-1 md:order-2 aspect-video md:aspect-square overflow-hidden">
            <Image
              src={HallVerata}
              alt="hall-image"
              width={10000}
              height={10000}
              className="object-cover aspect-video md:aspect-square rounded-xl"
            />
            <div className="absolute inset-0 bg-black opacity-15 rounded-b-3xl md:rounded-3xl" />
          </div>
        </div>
        <div className="container mx-auto my-5 px-3">
          <div className="bg-dark rounded-xl p-5 mb-5 flex justify-between items-center gap-1">
            <div>
              <h2 className="font-bold text-2xl text-left font-philosopher bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                CATALOGS
              </h2>
              <p className="text-left text-sm bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                Item yang tersedia di showroom kami.
              </p>
            </div>
            <button
              className="px-3 py-2 font-semibold transform scale-100 hover:scale-110 transition-transform duration-300 w-fit flex items-center gap-2 bg-second rounded-xl"
              onClick={() => router.push("/catalog")}
            >
              <span className="flex items-center gap-2 bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                Lists <FaLongArrowAltRight className="text-white" />
              </span>
            </button>
          </div>
          {loading ? (
            <Loading className="my-40" color="border-t-premium" />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-5">
              {products?.list?.map((item, i) => {
                return (
                  <CatalogCardPage
                    product={item.product}
                    key={i}
                    image={item.image}
                    disc={item.disc}
                    price={item.price}
                    stock={item.stock}
                    id={item.id}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="container mx-auto relative my-10 px-3">
          <div className="relative overflow-hidden h-fit md:aspect-video rounded-xl">
            <Image
              src={OfficeVerata}
              width={1000}
              height={1000}
              alt="office-verata"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center container mx-auto px-6">
            <div className="flex flex-col text-premium aspect-video">
              <div className="mb-4 bg-dark p-5 rounded-xl h-fit">
                <h2 className="font-bold text-2xl bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent text-left font-philosopher">
                  SERVICES
                </h2>
                <p className="text-left text-sm bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                  Kepuasan pelanggan menjadi prioritas kami.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 bg-dark p-5 rounded-xl flex-grow">
                <div className="grid grid-cols-5 gap-3">
                  <RiCustomerService2Fill size={50} className="col-span-1" />
                  <div className="col-span-4">
                    <h3 className="text-lg lg:text-xl font-semibold bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                      Consult
                    </h3>
                    <p className="text-xs lg:text-sm bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                      Tim kami siap memberikan preferensi untuk dekorasi yang
                      anda butuhkan.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <CgToolbox size={50} className="col-span-1" />
                  <div className="col-span-4">
                    <h3 className="text-lg lg:text-xl bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent font-semibold">
                      Reparation
                    </h3>
                    <p className="text-xs lg:text-sm bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                      Anda bisa mendapatkan reparasi dari tim kami.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <MdDeliveryDining size={50} className="col-span-1" />
                  <div className="col-span-4">
                    <h3 className="text-lg lg:text-xl bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent font-semibold">
                      Delivery
                    </h3>
                    <p className="text-xs lg:text-sm bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                      Pengiriman dapat dilakukan di hari yang sama hingga sampai
                      ke tempat tujuan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
