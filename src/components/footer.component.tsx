import React from "react";
// import Image from "next/image";
// import verata from "../assets/icons/verata.jpg";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const FooterPage: React.FC = () => {
  return (
    <div className="bg-second px-3">
      <div className="text-[#c5ac83] grid md:grid-cols-4 gap-10 py-5 container mx-auto">
        <div className="flex flex-col">
          <div className="text-sm lg:text-base font-semibold text-premium">About</div>
          {/* <div className="flex justify-center items-center">
            <Image
              src={verata}
              alt="verata-icons"
              width={150}
              height={150}
              className="w-3/12 sm:2/12 md:w-1/2 xl:w-1/3"
            />
          </div> */}
          <div className="text-justify text-xs lg:text-sm">
            Verata Wallpaper Jogja adalah penyedia kebutuhan interior dan
            eksterior Anda. Kami menawarkan koleksi wallpaper impor ready stock
            terlengkap untuk memperindah ruang Anda.
          </div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <div>
            <div className="font-semibold text-sm lg:text-base">Information</div>
            <div className="text-xs lg:text-sm">Products</div>
            <div className="text-xs lg:text-sm">Carrer</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <div>
            <div className="font-semibold text-sm lg:text-base">For Business</div>
            <div className="flex items-center gap-2 text-xs lg:text-sm">
              <FaSquareWhatsapp size={25} />
              <span>0878-7878-0251</span>
            </div>
            <div className="flex items-center gap-2 text-xs lg:text-sm">
              <SiGmail size={23} />
              <span className="truncate">veratadesign@yahoo.com</span>
            </div>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="font-semibold text-sm lg:text-base">Follow us</div>
            <div className="flex flex-row gap-5">
              <a
                href="https://www.instagram.com/veratawallpapergordynjogja/"
                target="_blank"
              >
                <FaSquareInstagram size={25} />
              </a>
              <a
                href="https://www.facebook.com/veratawallpapergordynjogja/"
                target="_blank"
              >
                {" "}
                <FaSquareFacebook size={25} />
              </a>
              <FaSquareXTwitter size={25} />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-5">
          <div>
            <div className="font-semibold text-sm lg:text-base">Store</div>
            <div className="text-justify text-xs lg:text-sm">
              Km 8, Jl. Magelang No.5, Mlati Glondong, Sendangadi, Mlati, Sleman
              Regency, Special Region of Yogyakarta 55285
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
