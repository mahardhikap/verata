import React from "react";
import PageContainer from "@/containers/page.container";
import Image from "next/image";
import LogoVerata from "../assets/icons/verata.jpg";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Verata Catalogs</title>
      </Head>
      <PageContainer>
        <div className="container mx-auto">
          <div className="w-full my-20">
            <div className="flex justify-center items-center">
              <Image
                src={LogoVerata}
                width={10000}
                height={10000}
                alt="logo-verata"
                className="w-4/12 sm:w-3/12 lg:w-2/12"
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <p className="w-10/12 sm:w-4/5 lg:w-8/12 2xl:w-1/2 text-justify text-base bg-gradient-to-r from-premium via-white to-second bg-clip-text text-transparent">
                <strong>Verata Wallpaper dan Interior Jogja</strong> adalah
                perusahaan yang mengkhususkan diri dalam penyediaan dan
                konsultasi untuk berbagai jenis wallpaper, gorden, karpet,
                lantai kayu, dan krei penutup jendela. Berlokasi di showroom
                kami di Jalan Magelang KM 5,5, Sinduadi, Sleman, Yogyakarta,
                kami menawarkan beragam pilihan motif yang dapat disesuaikan
                dengan selera dan kebutuhan pelanggan, semuanya dengan harga
                yang bersaing. Dengan pengalaman lebih dari 5 tahun dalam
                menangani proyek-proyek di berbagai sektor, termasuk perumahan,
                hotel, bank, apartemen, dan rumah sakit, kami telah melayani
                klien di kota-kota seperti Yogyakarta, Jakarta, Semarang,
                Surabaya, Magelang, dan Solo. Dikelola oleh tim profesional
                berpengalaman, Verata Wallpaper berkomitmen untuk menghadirkan
                produk berkualitas dan pelayanan yang memuaskan bagi setiap
                pelanggan.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default About;
