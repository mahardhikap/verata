import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter
} from "react-icons/fa6";

const FooterPage: React.FC = () => {
  return (
    <div className="bg-premium px-5">
      <div className="text-main grid grid-cols-2 md:grid-cols-4 gap-5 py-32 container mx-auto">
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
          <div className="text-lg md:text-base font-bold">
            ABOUT
          </div>
          <div className="text-sm">
            Verata Wallpaper dan Interior Jogja menawarkan kualitas impor kebutuhan wallpaper dan interior untuk memperindah ruang Anda.
          </div>
        </div>
        <div className="h-full flex flex-col gap-2 col-span-2 md:col-span-1">
          <div className="font-bold text-lg md:text-base">STORE</div>
          <div>
            <div className="text-sm break-words">
              Km 8, Jl. Magelang No.5, Mlati Glondong, Sendangadi, Mlati, Sleman
              Regency, Special Region of Yogyakarta 55285
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">INFORMATION</div>
          <div>
            <div className="text-sm">Products</div>
            <div className="text-sm">Carrer</div>
            <div className="text-sm">FAQs</div>
            <div className="text-sm">Law Certificate</div>
          </div>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="font-bold text-lg md:text-base">BUSINESS</div>
          <div className="text-sm">
            <p className="break-words">0878-7878-0251</p>
            <p className="break-words">veratadesign@yahoo.com</p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <div className="font-bold text-lg md:text-base">FOLLOW US</div>
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
        <div className="text-center col-span-2 md:col-span-4 mt-20">&#169; 2024 by Verata. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default FooterPage;
