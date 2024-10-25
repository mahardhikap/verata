import React from "react";
// import Image from "next/image";
// import verata from "../assets/icons/verata.jpg";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter
} from "react-icons/fa6";

const FooterPage: React.FC = () => {
  return (
    <div className="bg-second px-3">
      <div className="text-[#c5ac83] grid grid-cols-2 md:grid-cols-4 gap-5 py-10 container mx-auto">
        <div className="flex flex-col gap-2">
          <div className="text-lg md:text-base font-semibold text-premium font-philosopher">
            About
          </div>
          {/* <div className="flex justify-center items-center">
            <Image
              src={verata}
              alt="verata-icons"
              width={150}
              height={150}
              className="w-3/12 sm:2/12 md:w-1/2 xl:w-1/3"
            />
          </div> */}
          <div className="text-justify text-base md:text-sm">
            Verata Wallpaper Jogja adalah penyedia kebutuhan interior dan
            eksterior Anda. Kami menawarkan koleksi wallpaper impor ready stock
            terlengkap untuk memperindah ruang Anda.
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-semibold text-lg md:text-base font-philosopher">Information</div>
          <div>
            <div className="text-base md:text-sm">Products</div>
            <div className="text-base md:text-sm">Carrer</div>
            <div className="text-base md:text-sm">FAQs</div>
            <div className="text-base md:text-sm">Law Certificate</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-semibold text-lg md:text-base font-philosopher">For Business</div>
          <div className="text-base md:text-sm">
            <p className="break-words">0878-7878-0251</p>
            <p className="break-words">veratadesign@yahoo.com</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="font-semibold text-lg md:text-base font-philosopher">Follow us</div>
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
        <div className="h-full flex flex-col gap-2">
          <div className="font-semibold text-lg md:text-base font-philosopher">Store</div>
          <div>
            <div className="text-base md:text-sm break-words text-justify">
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
