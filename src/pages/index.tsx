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

export default function Home() {
  const router = useRouter();
  const params = {
    limit: 6,
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
        <title>Verata Wallpaper Jogja</title>
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
        <meta property="og:url" content={router.asPath} />
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
      <PageContainer>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 container mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-premium text-center md:text-right text-3xl xl:text-4xl w-full font-normal font-philosopher mb-5">
              WALLPAPER DAN INTERIOR PREMIUM.
            </h1>
            <p className="text-premium text-center md:text-right text-base lg:text-lg">
              <strong>Verata Wallpaper dan Interior Jogja</strong> menawarkan
              kualitas impor kebutuhan wallpaper dan interior untuk memperindah
              ruang Anda.
            </p>
            <button className="px-3 py-2 border-2 border-premium hover:bg-premium font-semibold transform scale-100 hover:scale-110 transition-transform duration-300 mt-10">
              Selengkapnya
            </button>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <Image
              src={HallVerata}
              alt="hall-image"
              width={1000}
              height={1000}
              className="rounded-tl-3xl border-e-4 border-b-4 border-premium rounded-br-3xl object-cover aspect-square"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="font-semibold text-2xl text-premium text-center mt-24 font-philosopher">
            SERVICES
          </h2>
          <p className="text-premium text-center text-sm lg:text-base mb-10">
            Kepuasan pelanggan menjadi prioritas kami.
          </p>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <Image
                src={OfficeVerata}
                width={1000}
                height={1000}
                alt="office-verata"
                className="rounded-tl-3xl border-s-4 border-b-4 border-premium rounded-br-3xl object-cover aspect-square"
              />
            </div>
            <div className="flex flex-col justify-center p-3">
              <div className="p-5 flex flex-col gap-5">
                <h3 className="text-xl text-premium font-semibold">Consult</h3>
                <p>
                  Tim kami siap memberikan preferensi untuk dekorasi yang anda
                  butuhkan.
                </p>
              </div>
              <div className="p-5 flex flex-col gap-5">
                <h3 className="text-xl text-premium font-semibold">
                  Reparation
                </h3>
                <p>Anda bisa mendapatkan reparasi dari tim kami.</p>
              </div>
              <div className="p-5 flex flex-col gap-5">
                <h3 className="text-xl text-premium font-semibold">Delivery</h3>
                <p>
                  Pengiriman dapat dilakukan di hari yang sama hingga sampai ke
                  tempat tujuan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h2 className="font-semibold text-2xl text-premium text-center mt-24 font-philosopher mb-10">
            CATALOG
          </h2>
          {loading ? (
            <Loading className="my-40" color="border-t-premium" />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
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
          <div className="flex justify-center items-center mt-10">
            <button
              className="col-span-2 lg:col-span-3 text-center text-base cursor-pointer transform scale-100 hover:scale-110 transition-transform duration-300 px-3 py-2 hover:bg-premium border-2 border-premium w-fit font-semibold"
              onClick={() => router.push("/catalog")}
            >
              Produk Lainnya
            </button>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
